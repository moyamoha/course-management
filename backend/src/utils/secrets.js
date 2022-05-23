import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const JWT_SECRET = process.env['ACCESS_TOKEN_SECRET'];
if (!JWT_SECRET) {
  process.exit(1);
}

export const BUCKET_NAME = process.env['BUCKET_NAME'];
export const AWS_BUCKET_REGION = process.env['AWS_BUCKET_REGION'];
export const AWS_ACCESS_KEY_ID = process.env['S3_ACCESS_KEY_ID'];
export const AWS_SECRET_ACCESS_KEY = process.env['S3_SECRET_ACCESS_KEY'];

const environment = process.env.NODE_ENV;
export const MONGODB_URI =
  environment === 'production'
    ? process.env.MONGODB_URI
    : process.env.MONGODB_URI_LOCAL;

if (!MONGODB_URI) {
  process.exit(1);
}
