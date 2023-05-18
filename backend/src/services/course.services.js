import mongoose from "mongoose";

import Course from "../models/course.model.js";
import { BadRequestError, NotFoundError } from "../helpers/apiError.js";

const createCourse = async (course, userId) => {
  try {
    let newCourse = new Course({
      ...course,
      user_id: mongoose.Types.ObjectId(userId),
    });
    newCourse = await newCourse.save();
    return newCourse;
  } catch (e) {
    throw new BadRequestError(
      "Something is wrong with information you provided"
    );
  }
};

const getAll = async (userId) => {
  const courses = await Course.find({ user_id: userId });
  if (!courses) {
    throw new NotFoundError("No courses found!");
  }
  return courses;
};

const getCourse = async (code, userId) => {
  const course = await Course.findOne({ code: code, user_id: userId });
  if (!course) {
    throw new NotFoundError(`Course ${code} not found!`);
  }
  return course;
};

const deleteCourse = async (courseCode, userId) => {
  const deleted = await Course.findOneAndDelete({
    code: courseCode,
    user_id: userId,
  });
  if (!deleted) {
    throw new NotFoundError(`Course ${code} not found!`);
  }
};

const updateCourse = async (courseCode, userId, update) => {
  const updated = Course.findOneAndUpdate(
    { code: courseCode, user_id: userId },
    update,
    { returnDocument: "after" }
  );
  if (!updated) {
    throw new NotFoundError(`Course ${code} not found!`);
  }
  return updated;
};

export default { getAll, deleteCourse, getCourse, createCourse, updateCourse };
