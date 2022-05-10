import mongoose from 'mongoose';
import Course from '../models/course.model.js';

const createCourse = async (course, userId) => {
  try {
    let newCourse = new Course({
      ...course,
      user_id: mongoose.Types.ObjectId(userId),
    });
    newCourse = await newCourse.save();
    return newCourse;
  } catch (e) {}
};

const getAll = async (userId) => {
  try {
    const courses = await Course.find({ user_id: userId });
    return courses;
  } catch (err) {}
};

const getCourse = async (code, userId) => {
  try {
    const course = await Course.findOne({ code: code, user_id: userId });
    return course;
  } catch (err) {}
};

const deleteCourse = async (courseCode, userId) => {
  try {
    await Course.findOneAndDelete({ code: courseCode, user_id: userId });
  } catch (err) {}
};

const updateCourse = async (courseCode, userId, update) => {
  try {
    const updated = Course.findOneAndUpdate(
      { code: courseCode, user_id: userId },
      update
    );
    return updated;
  } catch (err) {}
};

export default { getAll, deleteCourse, getCourse, createCourse, updateCourse };
