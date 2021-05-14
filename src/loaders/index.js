import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from './logger';

export default async (expressApp) => {
   Logger.info('Connectiong to mongodb..');
   await mongooseLoader();
   Logger.info('mongodb connected!');

   await expressLoader(expressApp);
   Logger.info('express loaded!');
};
