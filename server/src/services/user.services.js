import db from '../db/index.js';

export default {
  /**
   * 
   * @param {string} email 
   */
  getUserByEmail: (email) => {
    const users = db.users.JSON();
    const validUser = Object.values(users).find(record => record.email === email);
    return validUser;
  },

  /**
   * 
   * @param {{id: string, email: string, full_name: string | null, password: string, phone: string | null}} user 
   */
  saveUser: (user) => {
    return db.users.set(user.id, user);
  }
}
