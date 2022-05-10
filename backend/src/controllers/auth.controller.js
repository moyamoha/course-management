import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';
import userServices from '../services/user.services.js';

export const registerUser = async (req, res) => {
  const { username, lastname, firstname, password1, password2, email } =
    req.body;
  if (password1 !== password2) {
    res.json({ error: 'Passwords should match' });
    return;
  }
  if (password1.length < 10) {
    res.json({ error: 'Password is too short' });
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
    await userServices.createUser({
      username: username,
      lastname: lastname,
      firstname: firstname,
      password: hashedPassword,
      email: email,
      dateJoined: Date.now(),
    });
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(403);
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
      res.json({
        error: 'Wrong credentials. Please check your username and password',
      });
      return;
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          JSON.stringify({
            _id: user._id,
            username: user.username,
            email: user.email,
          }),
          process.env.ACCESS_TOKEN_SECRET
        );
        res.status(200).json({
          token: token,
        });
      }
    } catch (err) {
      res.json({ error: 'Password is incorrect' });
    }
  } catch (err) {
    res.sendStatus(500);
  }
};
