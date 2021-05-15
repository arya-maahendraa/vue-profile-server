import { randomBytes, pbkdf2Sync } from 'crypto';

export default class AuthService {
   constructor(userModel, logger) {
      this.UserModel = userModel;
      this.Logger = logger;
   }

   async SignUp(newUser) {
      try {
         const salt = randomBytes(32).toString('hex');
         const hashedPassword = pbkdf2Sync(
            newUser.password,
            salt,
            10000,
            64,
            'sha512'
         ).toString('hex');
         const userRecord = await this.UserModel.create({
            ...newUser,
            password: hashedPassword,
            salt: salt,
         });

         if (!userRecord) {
            throw new Error('User cannot be created');
         }

         const user = userRecord.toObject();
         Reflect.deleteProperty(user, 'password');
         Reflect.deleteProperty(user, 'salt');
         const token = 'test';
         return { user, token };
      } catch (err) {
         this.Logger.error(err);
         throw err;
      }
   }
}
