import jwt from 'jsonwebtoken';

import { ExpiredTokenError, InvalidTokenError, UnauthorizedError } from '../common/errors.js';
import { TOKEN_SECRET } from '../utils/jwtHelpers.js';

export function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new UnauthorizedError();

    const [tokenType, token] = authHeader.split(' ');
    if (tokenType.toLowerCase() !== 'bearer' || !token) throw new UnauthorizedError();
    jwt.verify(token, TOKEN_SECRET, (err, data) => {
      if (err) {
        if (err instanceof jwt.TokenExpiredError) throw new ExpiredTokenError();
        else throw new InvalidTokenError();
      }
      req.credentials = data;
    });
    return next();
  } catch (e) {
    return next(e);
  }
}