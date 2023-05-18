import dotenv from "dotenv";

dotenv.config();

export default {
  jwtSecret: process.env["JWT_SECRET"],
  dbUrl: process.env["MONGODB_URL"],
  port: process.env["PORT"] || 5000,
};
