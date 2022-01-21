import bcrypt from 'bcryptjs';
import Tokenizer from '../modules/tokenizer/index.js';

class AuthService {
  async isPasswordMatch(password, original) {
    return await await bcrypt.compare(password, original);
  }

  async generateToken(payload) {
    return {
      accessToken: Tokenizer.generateAccessToken(payload),
      // refreshToken: Tokenizer.generateRefreshToken(),
    };
  }
}
export default new AuthService();
