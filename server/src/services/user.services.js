import db from '../db/index.js';

export default {
  /**
   * 
   * @param {string} email 
   */
  getUserByEmail: (email) => {
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
   * @param {{id: string, email: string, full_name: string | null, password: string, phone: string | null}} user 
   */
  saveUser: (user) => {
    const { id, ...info } = user;
    return db.users.set(id, { ...info });
  },

  /**
   * 
   * @param {string} id 
   */
  getUserById: (id) => {
    const user = db.users.get(id);
    if (!user) return null;
    const { password, ...info } = user;
    return { ...info };
  }
}
