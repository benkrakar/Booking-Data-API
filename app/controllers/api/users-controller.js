import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';

class UsersController {
  async getUser(req, res) {
    try {
      const users = await models.users.findById(req.params.id);
      res.status(202).json({
        status: 'success',
        data: {
          users,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await models.users.find();
      res.status(202).json({
        status: 'success',
        data: {
          users,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async createUser(req, res) {
    try {
      const newUser = await models.users.create(req.body);
      res.status(202).json({
        status: 'success',
        data: {
          user: newUser,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async updateUser(req, res) {
    try {
      const users = await models.users.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(202).json({
        status: 'success',
        data: {
          users,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async deleteUser(req, res) {
    try {
      const users = await models.users.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: 'success',
        data: {
          users,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
}

export default new UsersController();
