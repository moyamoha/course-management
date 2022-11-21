import express from "express";
import passport from "passport";

import {
  create,
  deleteCourse,
  getUserCourses,
  getCourse,
  updateCourse,
} from "../controllers/course.controller.js";

const courseRouter = express.Router();

courseRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getUserCourses
);

courseRouter.get(
  "/:code",
  passport.authenticate("jwt", { session: false }),
  getCourse
);

courseRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  create
);
courseRouter.delete(
  "/:code",
  passport.authenticate("jwt", { session: false }),
  deleteCourse
);
courseRouter.put(
  "/:code",
  passport.authenticate("jwt", { session: false }),
  updateCourse
);

export default courseRouter;
