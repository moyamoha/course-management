import { BadRequestError } from '../helpers/apiError.js';
import User from '../models/user.model.js';

const createUser = async (user) => {
  try {
    let newUser = new User(user);
    newUser = await newUser.save();
    return newUser;
  } catch (err) {
    throw new BadRequestError(
      'Something is wrong with your provided information'
    );
  }
};

export default { createUser };
