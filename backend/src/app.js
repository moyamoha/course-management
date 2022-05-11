import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from 'passport';

import apiErrorHandler from './middlewares/apiErrorHandler.js';
import courseRouter from '../src/routers/course.router.js';
import authRouter from './routers/auth.router.js';
import { jwtStrategy } from './config/passport.js';
import apiContentType from './middlewares/apiContentType.js';
import { MONGODB_URI } from './utils/secrets.js';
import logRequest from './middlewares/logRequest.js';

dotenv.config();
const app = express();

// Necessary middlerwares
app.use(cors());
app.use(express.json());
app.use(apiContentType);
app.use(logRequest);

const port = process.env.PORT || 5000;
app.listen(4000, () => {
  console.log(`App is running on port ${port}`);
});

// Passport settings
app.use(passport.initialize());
passport.use(jwtStrategy);

// Routes
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/auth', authRouter);

// Custom Api error handler

// Connecting to mongodb
mongoose.connect(MONGODB_URI, () => {
  console.log('connected to database!');
});

app.use(apiErrorHandler);
