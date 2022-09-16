import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.header('token');
  if (!token) return res.status(401).json({ message: 'Auth Error' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.username = decoded.username;
    next();
  } catch (e) {
    // console.error(e);
    res.status(500).send({ message: 'Invalid Token' });
  }
};

export default auth;
