import { Container } from 'typedi';
import { UserInputDTO } from '../../entities/User';

const signupController = async (req, res, next) => {
   const Logger = Container.get('Logger');
   Logger.info('registering new user %o', req.body);
   return res.status(200).end();
   // try {
   //    const newUser = new UserInputDTO('user3', 'user3@mail.yesy', '1234');
   //    const authServiceInstance = Container.get('AuthServices');
   //    const { user, token } = await authServiceInstance.SignUp(newUser);
   //    return res.status(200).json({ user, token });
   // } catch (err) {
   //    Logger.error(`Error: ${err}`);
   //    return next(err);
   // }
};
export { signupController };
