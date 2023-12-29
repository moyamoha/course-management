import express from "express";
import passport from "passport";

import {
  changeUserName,
  login,
  registerUser,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();
authRouter.post("/register-user", registerUser);
authRouter.post("/login", login);
authRouter.patch(
  "/change-name",
  passport.authenticate("jwt", { session: false }),
  changeUserName
);

export default authRouter;
