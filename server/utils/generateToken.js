import jwt from 'jsonwebtoken';

const generateToken = (user, rememberMe) => {
  const ExpiresIn = !rememberMe
    ? process.env.JWT_DURATION
    : process.env.JWT_DURATION_TRUE;
  const token = jwt.sign(
    { username: user.username, email: user.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: ExpiresIn }
  );
  return token;
};

export default generateToken;
