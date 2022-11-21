import express from "express";
import passport from "passport";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

import {
  login,
  registerUser,
  setProfile,
  getProfile,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();
authRouter.post("/register-user", registerUser);
authRouter.post("/login", login);

authRouter.put(
  "/set-profile",
  upload.single("profile"),
  passport.authenticate("jwt", { session: false }),
  setProfile
);

authRouter.get(
  "/images/:key",
  passport.authenticate("jwt", { session: false }),
  getProfile
);

export default authRouter;
