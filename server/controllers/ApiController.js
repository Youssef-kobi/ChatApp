import User from '../models/user.model.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcrypt';

// @DESC Register User
// @ROUTE /auth/users
// @METHOD POST
export const signUp = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = await User.create({ email, username, password });
    res.status(201).send('Account created');
  } catch (err) {
    res.status(500).send(Object.keys(err.keyValue));
  }
};

// @DESC get User
// @ROUTE /api/users
// @METHOD GET
export const getUsers = async (req, res) => {
  try {
    // find users except user
    const user = await User.find({ username: { $ne: req.username } });
    if (!user) return res.status(404).send('User does not exist');
    // password compare
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
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
