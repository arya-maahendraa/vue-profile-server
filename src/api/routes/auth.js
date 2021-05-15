import { Router } from 'express';
import { signupController } from '../controllers/authController';
import { celebrator, Joi, Segments, Modes } from 'celebrate';

const celebrate = celebrator({ mode: Modes.FULL }, { convert: true });

const route = Router();
export default (app) => {
   app.use('/auth', route);
   route.post(
      '/signup',
      celebrate({
         [Segments.BODY]: Joi.object().options({ abortEarly: false }).keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
         }),
      }),
      signupController
   );
};
