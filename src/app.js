import express from 'express';
import config from './config';
import Logger from './loaders/logger';
import passport from 'passport';

async function startServer() {
   const app = express();

   await require('./loaders').default({
      expressApp: app,
      passportInstance: passport,
   });

   app.listen(config.port, () => {
      Logger.info(`Server listening on port: ${config.port}`);
   });
}

startServer();
