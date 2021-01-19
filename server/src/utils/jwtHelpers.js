import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const TOKEN_SECRET = process.env.TOKEN_SECRET || '4b783df4a1e6d4e2908617124d4e72f0';

/**
 * 
 * @param {{ id: string }} credentials 
 */
export function signToken(credentials) {
  const nonce = crypto.randomBytes(6).toString('hex');
  return jwt.sign({ nonce, ...credentials }, TOKEN_SECRET, { algorithm: 'HS256' });
}
