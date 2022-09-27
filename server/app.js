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
  createConversation,
  getConversationsByUsers,
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
  const ConnectedUser = await User.findOneAndUpdate(
    {
      username: socket.decoded.username,
    },
    { socketId: socket.id, status: 'Online' },
    { new: true }
  );
  console.log('ConnectedUser', ConnectedUser);
  if (socket.handshake.query.receiverId) {
    console.log('connected : ', socket.handshake.query.receiverId);
    let [UsersRoom] = await getConversationsByUsers(
      ConnectedUser._id.toString(),
      socket.handshake.query.receiverId
    );
    if (!UsersRoom) {
      UsersRoom = await createConversation(
        ConnectedUser._id.toString(),
        socket.handshake.query.receiverId
      );
    }
    console.log('created', socket.id);
    socket.join(UsersRoom._id.toString());
    socket.emit('getMessage', UsersRoom);
    socket.on('typing', (data) =>
      socket.to(UsersRoom._id.toString()).emit('typingResponse', data)
    );
  }
  socket.on('newChatMessage', async ({ senderId, receiverId, message }) => {
    // const { email, username, password } = req.body;dd
    try {
      const IsConversation = await addMessage(senderId, receiverId, message);

      socket.nsp
        .to(IsConversation._id.toString())
        .emit('getMessage', IsConversation);
    } catch (err) {
      console.log(err);
    }
  });
  // socket.on('sendMessage', async ({ senderId, receiverId, message }) => {
  //   const user = getUser(receiverId);
  //   const accountId = await accountModel.findById(senderId);
  //   if (user) {
  //     socket.to(user.socketId).emit('getMessage', {
  //       accountId,
  //       message,
  //     });
  //   }
  // });
  // const { roomId } = socket.handshake.query;

  // // Listen for new messages
  // socket.on('newChatMessage', (data) => {
  //   socket.join(roomId);
  //   io.in(roomId).emit('newChatMessage', data);
  // });
  // const accountId = await Conversation.findById(senderId);
  // if (user) {
  //   socket.to(user.socketId).emit('getMessage', {
  //     accountId,
  //     message,
  //   });
  // }
  // });
  // Leave the room if the user closes the socket
  socket.on('disconnect', () => {
    // socket.leave(roomId);
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
