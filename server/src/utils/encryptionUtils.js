import bcrypt from 'bcrypt';

const SALT_ROUNDS = process.env.SALT_ROUNDS || 12;

/**
 * 
 * @param {string} plainPwd 
 */
export async function hashPassword(plainPwd) {
  const salt = await bcrypt.genSalt(Number(SALT_ROUNDS));
  return bcrypt.hash(plainPwd, salt);
}

/**
 * 
 * @param {string} plainTxt 
 * @param {string} hash 
 */
export function compareHash(plainTxt, hash) {
  return bcrypt.compare(plainTxt, hash);
}
