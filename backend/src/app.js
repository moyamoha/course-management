import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from 'passport';
import path from 'path';

import apiErrorHandler from './middlewares/apiErrorHandler.js';
import courseRouter from '../src/routers/course.router.js';
import authRouter from './routers/auth.router.js';
import { jwtStrategy } from './config/passport.js';
import apiContentType from './middlewares/apiContentType.js';
import { MONGODB_URI } from './utils/secrets.js';
import logRequest from './middlewares/logRequest.js';
import { sendJson } from './controllers/course.controller.js';

dotenv.config();
const app = express();

// Necessary middlerwares
app.use(cors());
app.use(express.json());
app.use(apiContentType);
app.use(logRequest);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

const CWD = process.cwd();

// Passport settings
app.use(passport.initialize());
passport.use(jwtStrategy);

app.use(express.static(process.cwd()));

// Routes
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/auth', authRouter);
app.get(
  '/api/v1/download',
  passport.authenticate('jwt', { session: false }),
  cors({ exposedHeaders: ['Content-Disposition'] }),
  sendJson
);

app.get('/', (req, res) => {
  res.sendFile(path.join(CWD, 'src/index.html'));
});

console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI, () => {
  console.log('connected to database!');
});

app.use(apiErrorHandler);
