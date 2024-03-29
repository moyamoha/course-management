import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import path from "path";

import apiErrorHandler from "./middlewares/apiErrorHandler.js";
import courseRouter from "../src/routers/course.router.js";
import authRouter from "./routers/auth.router.js";
import { jwtStrategy } from "./config/passport.js";
import apiContentType from "./middlewares/apiContentType.js";
import logRequest from "./middlewares/logRequest.js";
import { sendJson } from "./controllers/course.controller.js";

dotenv.config();
const app = express();

// Necessary middlerwares
app.use(cors());
app.use(express.json());
app.use(apiContentType);
app.use(logRequest);

const CWD = process.cwd();

// Passport settings
app.use(passport.initialize());
passport.use(jwtStrategy);

app.use(express.static(process.cwd()));

// Routes
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/auth", authRouter);
app.get(
  "/api/v1/download",
  passport.authenticate("jwt", { session: false }),
  cors({ exposedHeaders: ["Content-Disposition"] }),
  sendJson
);

app.get("/", (req, res) => {
  res.sendFile(path.join(CWD, "src/index.html"));
});

// app.use(apiErrorHandler);

export default app;
