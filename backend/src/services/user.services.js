import User from '../models/user.model.js';

const createUser = async (user) => {
  try {
    let newUser = new User(user);
    newUser = await newUser.save();
    return newUser;
  } catch (e) {}
};

export default { createUser };
