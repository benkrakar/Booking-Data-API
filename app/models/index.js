import mongoose from 'mongoose';
import usersShema from './users-model.js';
import productsShema from './products-model.js';

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
models.products = mongoose.model('Products', productsShema);
models.users = mongoose.model('Users', usersShema);

export default models;
