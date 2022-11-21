import dotenv from "dotenv";

dotenv.config();

export default {
  jwtSecret: process.env["JWT_SECRET"],
  awsBucketName: process.env["AWS_BUCKET_NAME"],
  awsBucketRegion: process.env["AWS_BUCKET_REGION"],
  awsAccessKeyId: process.env["S3_ACCESS_KEY_ID"],
  awsSecretAccessKey: process.env["S3_SECRET_ACCESS_KEY"],
  dbUrl: process.env["MONGODB_URL"],
  port: process.env["PORT"] || 5000,
};
