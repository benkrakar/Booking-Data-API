import jwt from 'jsonwebtoken';
import models from '../models/index.js';

import AppException from '../exceptions/AppException.js';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token)
    return next(new AppException('You need to be logged in first!', 401));

  await jwt.verify(token, process.env.APP_KEY, async (err, user) => {
    if (err) return next(new AppException(err, 401));

    try {
      const authUser = await models.users.findOne({ user });
      req.user = authUser;
      next();
    } catch (e) {
      return next(new AppException('You need to be logged in first!', 401));
    }
  });
};
export default auth;
