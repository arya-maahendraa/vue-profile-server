import { Strategy, ExtractJwt } from 'passport-jwt';
import config from '../config';

// app.js will pass the global passport object here, and this function will configure it
export default ({ passport, userModel }) => {
   const options = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtPubKey,
      algorithms: [config.jwtAlgorithm],
   };
   passport.use(
      new Strategy(options, (jwtPayload, done) => {
         // We will assign the `sub` property on the JWT to the database ID of user
         userModel.findOne({ _id: jwtPayload.sub }, (err, user) => {
            // This flow look familiar?  It is the same as when we implemented
            // the `passport-local` strategy
            if (err) {
               return done(err, false);
            }
            if (user) {
               return done(null, user);
            } else {
               return done(null, false);
            }
         });
      })
   );
};
