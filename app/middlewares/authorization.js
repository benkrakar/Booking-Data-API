import jwt from 'jsonwebtoken';
import models from '../models/index.js';
import AuthService from '../services/auth-service.js';
import AppException from '../exceptions/AppException.js';

const authrization = async (req, res, next, ...role) => {
  if (!role.includes(req.user.role)) {
    return next(new AppException('You dont have permission to access this action!', 403));
  }
  next();
};
export default authrization;
