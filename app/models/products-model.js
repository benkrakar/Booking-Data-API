import mongoose from 'mongoose';

const productsShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'user must have a name'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'user must have a name'],
  },
  price: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default productsShema;
