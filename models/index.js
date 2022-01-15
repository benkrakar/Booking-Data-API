import mongoose from 'mongoose';
import usersShema from './users-model.js';

const models = {};
models.users = mongoose.model('Users', usersShema(mongoose));

export default models;
