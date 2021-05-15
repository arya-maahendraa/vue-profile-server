import expressLoader from './express';
import mongooseLoader from './mongoose';
import passportLoader from './passport';
import injectorLoader from './injector';
import Logger from './logger';

export default async ({ expressApp, passportInstance }) => {
   await mongooseLoader();
   Logger.info('DB loaded and connected!');

   const userModel = {
      name: 'userModel',
      model: require('../models/User').default,
   };
   injectorLoader({
      models: [userModel],
   });
   Logger.info('injector loaded!');

   passportLoader({
      passport: passportInstance,
      userModel: userModel.model,
   });

   expressLoader({ app: expressApp, passport: passportInstance });
   Logger.info('express loaded!');
};
