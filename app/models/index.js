import mongoose from 'mongoose';
import usersShema from './users-model.js';

const db = process.env.DATABASE_LOCAL;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connection 👌');
  });

const models = {};
models.users = mongoose.model('Users', usersShema);

export default models;
