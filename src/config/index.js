import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const result = dotenv.config();
if (result.error) {
   throw new Error("Couldn't find .env file");
}

export default {
   port: parseInt(process.env.PORT, 10),
   logs: {
      level: process.env.LOG_LEVEL || 'silly',
   },
   databaseUrl: process.env.MONGODB_URI,
};
