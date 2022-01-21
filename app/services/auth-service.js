import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthService {
  async isPasswordMatch(password, original) {
    return await await bcrypt.compare(password, original);
  }

  async generateToken(payload) {
    return jwt.sign(payload, process.env.APP_KEY, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
  }
}
export default new AuthService();
