import { Container } from 'typedi';
import Logger from './logger';
import AuthServices from '../services/auth';

export default ({ models }) => {
   try {
      models.forEach((model) => {
         Container.set(model.name, model.model);
      });

      Container.set('Logger', Logger);
      Container.set(
         'AuthServices',
         new AuthServices(Container.get('userModel'), Logger)
      );
   } catch (err) {
      Logger.error(`Error on dependency injector loader: %o`, err);
      throw err;
   }
};
