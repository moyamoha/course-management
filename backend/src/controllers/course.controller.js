import CourseService from '../services/course.services.js';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);

export const getUserCourses = async (req, res, next) => {
  const user = req.user;
  try {
    const courses = await CourseService.getAll(user._id);
    res.json(courses);
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  const user = req.user;
  try {
    const course = await CourseService.createCourse(req.body, user._id);
    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
};

export const deleteCourse = async (req, res, next) => {
  const user = req.user;
  try {
    await CourseService.deleteCourse(req.params['code'], user._id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export const updateCourse = async (req, res, next) => {
  const user = req.user;
  try {
    const updated = await CourseService.updateCourse(
      req.params['code'],
      user._id,
      req.body
    );
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

export const getCourse = async (req, res, next) => {
  const user = req.user;
  try {
    const course = await CourseService.getCourse(req.params['code'], user._id);
    res.json(course);
  } catch (err) {
    next(err);
  }
};

export const sendJson = async (req, res, next) => {
  const home = process.cwd();
  const user = req.user;
  const fileName = user.username + '_data.json';
  const filePath = path.join(home, fileName);
  try {
    const courses = await CourseService.getAll(user._id);
    await writeFile(filePath, JSON.stringify(courses));
    const stream = fs.createReadStream(filePath);
    res.set({
      'Content-Disposition': `attachment; filename='${fileName}'`,
      'Content-Type': 'application/json',
    });
    stream.pipe(res);
  } catch (err) {
    next(err);
  }
};
