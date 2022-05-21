import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  scope: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: false,
    default: 'Suomi',
  },
  level: {
    type: String,
    required: true,
  },
  scale: {
    type: String,
    enum: ['Hylätty-Hyväksytty', 'Yleinen asteikko, 0-5'],
    default: 'Yleinen asteikko, 0-5',
  },
  state: {
    type: String,
    enum: ['accomplished', 'onGoing', 'notStarted'],
    default: 'notStarted',
  },
  result: {
    type: String,
    required: false,
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

const courseModel = new mongoose.model('Course', courseSchema);
export default courseModel;
