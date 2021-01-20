import { UserNotFound } from '../common/errors.js';
import userServices from '../services/user.services.js';
import { getUserIdFromCredentials } from '../utils/jwtHelpers.js'

export default {
  getUserMe: (req, res) => {
    const userId = getUserIdFromCredentials(req);
    
    const userInfo = userServices.getUserById(userId);
    if (!userInfo) throw new UserNotFound();
    
    const { password, ...info } = userInfo;
    return res.json({ ...info });
  }
}