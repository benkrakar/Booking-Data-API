import jwt from 'jsonwebtoken';
import crypto from 'crypto';

class Tokenizer {
  generateAccessToken(user) {
    return jwt.sign(user, process.env.APP_KEY, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
  }

  generateRefreshToken(lenght = 40) {
    return crypto.randomBytes(lenght).toString('hex');
  }
}
export default new Tokenizer();
