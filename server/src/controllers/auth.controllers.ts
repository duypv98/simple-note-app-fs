import { Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import asyncHandler from 'express-async-handler';

import { InvalidCredentialError, UsedEmailError } from '../common/errors';
import userServices from '../services/user.services';
import { compareHash, hashPassword } from '../utils/encryptionUtils';
import { signUserToken } from '../utils/jwtHelpers';
import { checkRequiredFields } from '../utils/validator';
import User from '../models/User';

export default {
  login: asyncHandler(async (req: any, res: Response, next: NextFunction) => {
    checkRequiredFields(req.body, ['email', 'password']);

    const { email, password } = req.body;
    let isValidUser = true;
    
    const user = userServices.getUserByEmail(email);
    if (!user || !user.id) isValidUser = false;
    else isValidUser = await compareHash(password, user.password);

    if (!isValidUser) throw new InvalidCredentialError();
    const token = signUserToken({ userId: user.id });
    return res.json({
      token
    });
  }),

  signUp: asyncHandler(async (req: any, res: Response, next: NextFunction) => {
    checkRequiredFields(req.body, ['email', 'password']);

    const { email, full_name, password, phone } = req.body;

    const existedUser = userServices.getUserByEmail(email);
    if (existedUser) throw new UsedEmailError();

    const hashPwd = await hashPassword(password);

    const newUser = new User({
      id: uuidv4(),
      email,
      full_name,
      password: hashPwd,
      phone
    });

    userServices.saveUser(newUser);
    return res.json({ sucess: true });
  })
}