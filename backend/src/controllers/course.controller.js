import CourseService from '../services/course.services.js';

export const getUserCourses = async (req, res) => {
  const user = req.user;
  console.log(user);
  try {
    const courses = await CourseService.getAll(user._id);
    res.json(courses);
  } catch (err) {
    res.send(err.message);
  }
};

export const create = async (req, res) => {
  const user = req.user;
  try {
    const course = await CourseService.createCourse(req.body, user._id);
    console.log(course);
    res.status(201).json(course);
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteCourse = async (req, res) => {
  const user = req.user;
  try {
    await CourseService.deleteCourse(req.params['code'], user._id);
    res.sendStatus(204);
  } catch (err) {}
};

export const updateCourse = async (req, res) => {
  const user = req.user;
  try {
    const updated = await CourseService.updateCourse(
      req.params['code'],
      user._id,
      req.body
    );
    res.status(200).json(updated);
  } catch (err) {
    console.log(error);
  }
};

export const getCourse = async (req, res) => {
  const user = req.user;
  try {
    const course = await CourseService.getCourse(req.params['code'], user._id);
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};
