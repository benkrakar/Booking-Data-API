import validator from 'validator';

const usersShema = (mongoose) =>
  new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'user must have a name'],
      unique: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, 'Please enter a valid email'],
      required: [true, 'user must have a email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'user must have a password'],
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      required: false,
      default: 'user',
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  });
export default usersShema;
