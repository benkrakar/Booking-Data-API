const usersShema = (mongoose) =>
  new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'user must have a name'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'user must have a email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'user must have a password'],
    },
    role: {
      type: String,
      required: false,
      default: 'user',
    },
  });
export default usersShema;
