import jwt from 'jsonwebtoken';

const socketAuth = (socket, next) => {
  // const token = req.header('token');
  // if (!token) return res.status(401).json({ message: 'Auth Error' });
  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
  //   req.username = decoded.username;
  //   next();
  // } catch (e) {
  //   console.error(e);
  //   res.status(500).send({ message: 'Invalid Token' });
  // }
  // if (socket.handshake.query && socket.handshake.query.token) {
  console.log('in');
  const token = socket.handshake.auth.token;
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
