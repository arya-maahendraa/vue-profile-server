import routes from '../api';
import Logger from './logger';
import cors from 'cors';
import { json as expressJson } from 'express';
import config from '../config';
import { errors as celebrateErorrs } from 'celebrate';

export default ({ app, passport }) => {
   app.use(passport.initialize());
   Logger.info('passport initialized!');

   app.use(cors());
   app.use(expressJson());

   // Health Check endpoints
   app.get('/status', (_req, res) => {
      res.status(200).end();
   });
   app.head('/status', (_req, res) => {
      res.status(200).end();
   });

   // // load api routes
   app.use(config.api.prefix, routes());

   /// catch 404 and forward to error handler
   app.use((_req, _res, next) => {
      const err = new Error('Not Found');
      err['status'] = 404;
      next(err);
   });

   // middleware for handle celebrates erorrs
   app.use(celebrateErorrs());

   app.use((err, _req, res, _next) => {
      res.status(err.status || 500);
      res.json({
         errors: {
            message: err.message,
         },
      });
   });
};
