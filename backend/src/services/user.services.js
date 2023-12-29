import { changeNamePayload } from "../config/request-schemas.js";
import { BadRequestError } from "../helpers/apiError.js";
import User from "../models/user.model.js";

const createUser = async (user) => {
  try {
    let newUser = new User(user);
    newUser = await newUser.save();
    return newUser;
  } catch (err) {
    throw new BadRequestError(
      "Something is wrong with your provided information"
    );
  }
};

const changeName = async (userId, update) => {
  const { error, value } = changeNamePayload.validate(update);
  if (error) {
    throw new BadRequestError(error.details);
  }
  try {
    let newUser = await User.findByIdAndUpdate(userId, value, {
      returnNewDocument: true,
    });
    return await newUser;
  } catch (err) {
    throw new BadRequestError("Could not change the name");
  }
};

export default { createUser, changeName };
