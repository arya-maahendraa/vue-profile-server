import express from 'express';
import config from './config';
import Logger from './loaders/logger'

async function startServer() {
   const app = express();

   await require('./loaders').default(app);

   app.get('/', (req, res) => {
      res.send('Hello World');
   });

   app.listen(config.port, () => {
      Logger.info(`Server listening on port: ${config.port}`);
   });
}

startServer();
