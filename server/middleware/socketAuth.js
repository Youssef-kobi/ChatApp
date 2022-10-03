import jwt from 'jsonwebtoken';

const socketAuth = (socket, next) => {
  const token = socket.handshake.auth.token;
  console.log('socketAuth')
  if (!token) next(new Error('Authentication error'));
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY,
      (err, decoded) => {
        if (err) return next(new Error('Authentication error'));
        socket.decoded = decoded;
        next();
        
      }
    );
  } catch (error) {
    socket.disconnect();
    next(new Error('Authentication error'));
  }
};

export default socketAuth;
