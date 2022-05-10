import express from 'express';
import passport from 'passport';

import { login, registerUser } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/register-user', registerUser);
authRouter.post('/login', login);

export default authRouter;
