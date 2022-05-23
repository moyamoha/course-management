import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  firstname: {
    type: String,
    required: false,
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
  profile: {
    type: String,
    required: false,
  },
});

const userModel = mongoose.model('User', userSchema);
export default userModel;
