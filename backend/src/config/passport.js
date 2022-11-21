import JwtStrategy, { ExtractJwt } from "passport-jwt";

import User from "../models/user.model.js";
import secrets from "../utils/secrets.js";

export const jwtStrategy = new JwtStrategy.Strategy(
  {
    secretOrKey: secrets.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    try {
      const user = await User.findOne({ email: payload.email });
      done(null, user);
    } catch (err) {
      done(new UnauthorizedError("You are not logged in"), null);
    }
  }
);
