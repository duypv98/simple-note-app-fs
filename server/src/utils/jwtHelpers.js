import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../common/errors.js';

export const TOKEN_SECRET = process.env.TOKEN_SECRET || '4b783df4a1e6d4e2908617124d4e72f0';

/**
 * 
 * @param {{ userId: string }} credentials 
 */
export function signUserToken(credentials) {
  const nonce = crypto.randomBytes(6).toString('hex');
  return jwt.sign({ nonce, ...credentials }, TOKEN_SECRET, { algorithm: 'HS256' });
}

/**
 * 
 * @param {Request} req 
 */
export function getUserIdFromCredentials(req) {
  if (!req.credentials || !req.credentials.userId) throw new UnauthorizedError();
  return req.credentials.userId; 
}
