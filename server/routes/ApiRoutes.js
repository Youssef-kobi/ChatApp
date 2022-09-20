import express from 'express';
import { getUsers } from '../controllers/ApiController.js';
import auth from '../middleware/auth.js';

const Routes = express.Router();
// @route Post api/user
// Routes.post('/signIn', YupValidate(loginSchema), signIn);
// Routes.post('/signUp', YupValidate(registerSchema), signUp);
Routes.get('/users', auth, getUsers);

export default Routes;
