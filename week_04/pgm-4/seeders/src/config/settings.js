import path from 'path';
import dotenv from 'dotenv';

console.log(path.join(process.cwd(), `${process.env.NODE_ENV || 'development'}.env`));

dotenv.config({
  path: path.join(process.cwd(), `${process.env.NODE_ENV || 'development'}.env`),
});

const settings = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  CRAPHCMS_CONTENT_API: process.env.CRAPHCMS_CONTENT_API,
  GRAPHCMS_ACCESS_TOKENS: process.env.GRAPHCMS_ACCESS_TOKENS
};

export default settings;