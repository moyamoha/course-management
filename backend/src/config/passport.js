import JwtStrategy, { ExtractJwt } from 'passport-jwt';

import User from '../models/user.model.js';
import { JWT_SECRET } from '../utils/secrets.js';

export const jwtStrategy = new JwtStrategy.Strategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    try {
      const user = await User.findOne({ email: payload.email });
      done(null, user);
    } catch (err) {
      done(new UnauthorizedError('You are not logged in'), null);
    }
  }
);
