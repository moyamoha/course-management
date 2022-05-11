import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const JWT_SECRET = process.env['ACCESS_TOKEN_SECRET'];
if (!JWT_SECRET) {
  process.exit(1);
}

const environment = process.env.NODE_ENV;
export const MONGODB_URI =
  environment === 'production'
    ? process.env.MONGODB_URI
    : process.env.MONGODB_URI_LOCAL;

if (!MONGODB_URI) {
  process.exit(1);
}
