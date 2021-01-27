import db from '../db';
import User from '../models/User';

export default {
  /**
   * 
   * @param {string} email 
   */
  getUserByEmail: (email: string) => {
    const users = db.users.JSON();
    const [validUserId] = Object.keys(users).filter(id => users[id].email === email);
    if (!validUserId) return null;
    return {
      id: validUserId,
      ...users[validUserId]
    }
  },

  /**
   * 
   * @param {User} user 
   */
  saveUser: (user: User) => {
    const { id, ...info } = user;
    return db.users.set(id, { ...info });
  },

  /**
   * 
   * @param {string} id 
   */
  getUserById: (id: string) => {
    const user = db.users.get(id);
    if (!user) return null;
    const { password, ...info } = user;
    return { ...info };
  }
}
