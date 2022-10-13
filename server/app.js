import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRoutes from './routes/AuthRoutes.js';
import connectDB from './configs/db.js';
import http from 'http';
import { Server } from 'socket.io';
import ApiRoutes from './routes/ApiRoutes.js';
import socketAuth from './middleware/socketAuth.js';
import Conversation from './models/chat.model.js';
import mongoose from 'mongoose';
import User from './models/user.model.js';
import {
  addMessage,
  connectUser,
  createConversation,
  getConversationsByUsers,
  getLastConversations,
  readMessages,
  setUserStatus,
} from './utils/socketServices.js';

// Server Initialization
const app = express();

dotenv.config();
// MiddleWares
const PORT = process.env.PORT || 3005;
app.use(cors());
app.use(express.json());
connectDB();
const server = http.createServer(app);
app.get('/', (req, res) => {
  res.send('Hello');
});
// Routes will be written here
app.use('/auth', AuthRoutes);
app.use('/api', ApiRoutes);
// Socket init
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
io.use(socketAuth).on('connection', async (socket) => {
  console.log('connection');
  const ConnectedUser = await connectUser(socket.decoded.username, socket.id);
  let lastConversations;
  socket.on('getLastConversations', async () => {
    try {
      lastConversations = await getLastConversations(ConnectedUser._id);
      console.log('been here');
      socket.emit('lastConversations', lastConversations);
    } catch (e) {
      console.log('[error]', 'leave room :', e);
      socket.emit('error', 'couldnt perform requested action');
    }
  });
  socket.on('seen', async ({ receiverId }) => {
    try {
      lastConversations = await readMessages(ConnectedUser._id, receiverId);
      console.log('seen');
      socket.emit('lastConversations', lastConversations);
    } catch (e) {
      console.log('[error]', 'leave room :', e);
      socket.emit('error', 'couldnt perform requested action');
    }
  });
  socket.on('join', async ({ receiverId }) => {
    let UsersRoom = await getConversationsByUsers(
      ConnectedUser._id.toString(),
      receiverId
    );
    if (!UsersRoom) {
      UsersRoom = await createConversation(
        ConnectedUser._id.toString(),
        receiverId
      );
    }
    socket.join(UsersRoom._id.toString());
    io.in(UsersRoom._id.toString()).emit('getMessage', UsersRoom);

    socket.on('leaveRoom', async () => {
      try {
        console.log('[socket]', 'leave room :', UsersRoom._id.toString());
        socket.leave(UsersRoom._id.toString());
        console.log('[rooms]', 'rooms :', socket.rooms);
        // socket.to(room).emit('user left', socket.id);
      } catch (e) {
        console.log('[error]', 'leave room :', e);
        socket.emit('error', 'couldnt perform requested action');
      }
    });
  });

  socket.on('typing', ({ conversationId }) => {
    socket.broadcast
      .to(conversationId.toString())
      .emit('typingResponse', ConnectedUser.firstName);
  });

  socket.on('newChatMessage', async ({ senderId, receiverId, message }) => {
    try {
      const IsConversation = await addMessage(senderId, receiverId, message);
      io.in(IsConversation._id.toString()).emit('getMessage', IsConversation);
      socket.nsp.to([
        IsConversation.receiverId.socketId,
        IsConversation.senderId.socketId,
      ]);
      socket.nsp
        .to(IsConversation._id.toString())
        .emit('lastConversationUpdate', IsConversation);
    } catch (err) {
      console.log(err);
    }
  });
  // Leave the room if the user closes the socket
  socket.on('disconnect', async () => {
    // socket.leave(UsersRoom._id.toString());
    await setUserStatus(ConnectedUser._id);
    socket.disconnect()
    console.log('disconnected');
  });
});
server.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running,and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

// app.listen(PORT, console.log(`Server is running on ${PORT} PORT`));
