import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRoutes from './routes/AuthRoutes.js';
import connectDB from './configs/db.js';
import http from 'http';
import { Server } from 'socket.io';
import ApiRoutes from './routes/ApiRoutes.js';
import socketAuth from './middleware/socketAuth.js';


// Server Initialization
const app = express();

dotenv.config();
// MiddleWares
const PORT = process.env.PORT || 3001;
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
io.use(socketAuth).on('connection', (socket) => {
  console.log('Made socket connection');
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on('newChatMessage', (data) => {
    io.in(roomId).emit('newChatMessage', data);
  });

  // Leave the room if the user closes the socket
  socket.on('disconnect', () => {
    socket.leave(roomId);
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
