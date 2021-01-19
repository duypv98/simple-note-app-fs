import db from '../db/index.js';

export default {
  /**
   * 
   * @param {string} email 
   */
  getUserByEmail: (email) => {
    const users = db.users.JSON();
    const [validUserId] = Object.keys(users).filter(id => users[id].email === email);
    return validUserId ? users[validUserId] : null;
  },

  /**
   * 
   * @param {{id: string, email: string, full_name: string | null, password: string, phone: string | null}} user 
   */
  saveUser: (user) => {
    const { id, ...info } = user;
    return db.users.set(id, { ...info });
  }
}
