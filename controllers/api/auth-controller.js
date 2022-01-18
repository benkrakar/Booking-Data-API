import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await models.users.findOne({ email }).select('+password');
    if (!user) throw new AppException('invalid mail', 403);
    if (password !== user.password) throw new AppException();
    res.send(user);
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
