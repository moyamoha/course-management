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

const updateUser = async (user) => {
  try {
    let newUser = await User.findByIdAndUpdate(user._id, user, {
      returnNewDocument: true,
    });
    return await newUser;
  } catch (err) {
    throw new BadRequestError('Could not update the user');
  }
};

export default { createUser, updateUser };
