import models from '../../models/index.js';

class UsersController {
  async getUser(req, res) {
    console.log('hi from controller 👋👋');
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
    console.log('hi from controller 👋👋');
  }

  async deleteUser(req, res) {
    console.log('hi from controller 👋👋');
  }
}

export default new UsersController();
