import bcrypt from 'bcrypt';

const SALT_ROUNDS: number = parseInt(process.env.SALT_ROUNDS as string) || 12;

/**
 * 
 * @param {string} plainPwd 
 */
export async function hashPassword(plainPwd: string) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(plainPwd, salt);
}

/**
 * 
 * @param {string} plainTxt 
 * @param {string} hash 
 */
export function compareHash(plainTxt: string, hash: string) {
  return bcrypt.compare(plainTxt, hash);
}
