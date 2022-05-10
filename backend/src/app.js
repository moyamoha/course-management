import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from 'passport';

import courseRouter from '../src/routers/course.router.js';
import authRouter from './routers/auth.router.js';
import { jwtStrategy } from './config/passport.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

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

// Connecting to mongodb
const mongodbUrl = process.env.MONGODB_URI;
mongoose.connect(mongodbUrl, () => {
  console.log('connected to database!');
});
