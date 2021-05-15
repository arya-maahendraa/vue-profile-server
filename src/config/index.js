import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { ExtractJwt } from 'passport-jwt';

const pathToPrivKey = path.join(__dirname, '../..', 'id_rsa_priv.pem');
const pathToPubKey = path.join(__dirname, '../..', 'id_rsa_pub.pem');

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
   jwtPrivKey: fs.readFileSync(pathToPrivKey, 'utf-8'),
   jwtPubKey: fs.readFileSync(pathToPubKey, 'utf-8'),
   jwtAlgorithm: process.env.JWT_ALGO,
   api: {
      prefix: '/api',
   },
};
