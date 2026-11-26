import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mydatabase',
    },
    jwtSecret: process.env.JWT_SECRET || 'mysecretkey',
    logLevel: process.env.LOG_LEVEL || 'info',
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api',
};
