import models from '../../models/index.js';

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
      res.status(400).json({
        status: 'fail',
        message: err,
      });
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
      res.status(400).json({
        status: 'fail',
        message: err,
      });
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
      res.status(400).json({
        status: 'fail',
        message: err,
      });
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
      res.status(400).json({
        status: 'fail',
        message: err,
      });
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
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
}

export default new UsersController();
