import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';

import { ExpiredTokenError, InvalidTokenError, UnauthorizedError } from '../common/errors';
import { TOKEN_SECRET } from '../utils/jwtHelpers';

export function verifyToken(req: any, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new UnauthorizedError();

    const [tokenType, token] = authHeader.split(' ');
    if (tokenType.toLowerCase() !== 'bearer' || !token) throw new UnauthorizedError();
    jwt.verify(token, TOKEN_SECRET, (err: any, data: any) => {
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