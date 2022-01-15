import models from '../../models/index.js';

class AuthController {
  async login(req, res) {
    console.log('hi from controller 👋👋');
  }

  async register(req, res) {
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
}

export default new AuthController();
