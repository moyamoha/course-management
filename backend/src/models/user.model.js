import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    unique: true,
  },
  lastname: {
    type: String,
    required: false,
    minlength: 3,
  },
  firstname: {
    type: String,
    required: false,
    minlength: 3,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
    required: false,
  },
  password: {
    type: String,
    minlength: 10,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
