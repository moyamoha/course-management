import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const JWT_SECRET = process.env['ACCESS_TOKEN_SECRET'];
if (!JWT_SECRET) {
  process.exit(1);
}
