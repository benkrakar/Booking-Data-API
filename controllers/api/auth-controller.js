import models from '../../models/index.js';
import InvalidCredentialException from '../../exceptions/invalid-credential-exception.js';

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await models.users.findOne({ email }).select('+password');
    if (!user) throw new InvalidCredentialException('invalid mail', 400);
    if (password !== user.password) throw new InvalidCredentialException();
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
