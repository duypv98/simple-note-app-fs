import { Response } from 'express';

import { NotFoundUserError } from '../common/errors';
import userServices from '../services/user.services';
import { getUserIdFromCredentials } from '../utils/jwtHelpers'

export default {
  getUserMe: (req: any, res: Response) => {
    const userId = getUserIdFromCredentials(req);
    
    const userInfo = userServices.getUserById(userId);
    if (!userInfo) throw new NotFoundUserError();
    
    const { password, ...info } = userInfo;
    return res.json({ ...info });
  }
}