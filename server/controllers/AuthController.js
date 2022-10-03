import User from '../models/user.model.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcrypt';

// @DESC Register User
// @ROUTE /auth/users
// @METHOD POST
export const signUp = async (req, res) => {
  const { firstName, lastName, email, username, password,picture } = req.body;
  try {
    console.log(picture)
    const user = await User.create({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email : email.toLowerCase(),
      username,
      picture,
      password,
    });
    res.status(201).send('Account created');
  } catch (err) {
    res.status(500).send(Object.keys(err.keyValue));
  }
};

// @DESC Login User
// @ROUTE /auth/login
// @METHOD POST
export const signIn = async (req, res) => {
  const { username, password, rememberMe } = req.body;
  try {
    // find user by email or username
    const user = await User.findOne({
      $or: [{ email: username }, { username: username }],
    });
    if (!user) return res.status(404).send('User does not exist');
    // password compare
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(403).send('Incorrect password');
    res.status(200).json({ token: generateToken(user, rememberMe) });
  } catch (e) {
    res.status(500).send('Internal Server Error');
  }
};

// @DESC Get User Logged in
// @ROUTE /api/users/getMe
// @METHOD GET
export const getMe = async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findOne({ username: req.username });
    if (!user) {
      return res.status(401).send('User not found');
    } else {
      res.status(201).json(user);
    }
  } catch (e) {
    res.status(500).json({ message: 'Error in Fetching user' });
  }
};
