import bcrypt from 'bcryptjs';
import Tokenizer from '../modules/tokenizer/index.js';

class AuthService {
  async isPasswordMatch(password, original) {
    return await await bcrypt.compare(password, original);
  }

  async changedPasswordAfter(passwordChangedAt, iat) {
    const ChangedAt = parseInt(passwordChangedAt.getTime() / 1000, 10);
    return iat < ChangedAt;
  }

  async generateToken(payload) {
    return {
      accessToken: Tokenizer.generateAccessToken(payload),
      // refreshToken: Tokenizer.generateRefreshToken(),
    };
  }
}
export default new AuthService();
