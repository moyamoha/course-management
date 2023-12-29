import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import UserServices from "../services/user.services.js";
import secrets from "../utils/secrets.js";

export const registerUser = async (req, res) => {
  const { username, lastname, firstname, password1, password2, email } =
    req.body;
  if (password1 !== password2) {
    res.status(400).json({ message: "Passwords should match" });
    return;
  }
  if (password1.length < 10) {
    res.status(400).json({ message: "Password is too short" });
    return;
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password1, 10);
  } catch (err) {
    res.sendStatus(500);
    return;
  }
  try {
    await UserServices.createUser({
      username: username,
      lastname: lastname,
      firstname: firstname,
      password: hashedPassword,
      email: email,
      dateJoined: Date.now(),
    });
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(401).json({ message: "Please provide correct information" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  let user;
  try {
    user = await User.findOne({
      username: username,
    });
    if (!user) {
      res.status(401).json({
        message: "Wrong credentials. Please check your username and password",
      });
      return;
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          JSON.stringify({
            _id: user._id,
            name: user.firstname + " " + user.lastname,
            email: user.email,
            dateJoined: user.dateJoined,
          }),
          secrets.jwtSecret
        );
        res.json({
          token: token,
        });
      }
    } catch (err) {
      res.status(401).json({ message: "Password is incorrect" });
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

export const changeUserName = async (req, res) => {
  const user = req.user;
  try {
    await UserServices.changeName(user._id, req.body);
    res.sendStatus(200);
  } catch (err) {
    res.status(err.statusCode).json({ message: err.message });
  }
};
