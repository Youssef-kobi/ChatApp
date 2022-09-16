import express from 'express';
import { signIn, signUp, getMe } from '../controllers/AuthController.js';
import auth from '../middleware/auth.js';
import YupValidate from '../middleware/yup.js';
import { loginSchema, registerSchema } from '../utils/yupValidations.js';

const Routes = express.Router();
// @route Post api/users

Routes.post('/signIn', YupValidate(loginSchema), signIn);
Routes.post('/signUp', YupValidate(registerSchema), signUp);
Routes.get('/getMe', auth, getMe);
export default Routes;
