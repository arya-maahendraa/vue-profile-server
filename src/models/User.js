import mongoose from 'mongoose';

const user = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, 'Please enter a full name'],
         index: true,
      },

      email: {
         type: String,
         lowercase: true,
         unique: true,
         index: true,
      },

      password: String,

      salt: String,

      role: {
         type: String,
         default: 'user',
      },
   },
   { timestamps: true }
);

export default mongoose.model('_user', user);
