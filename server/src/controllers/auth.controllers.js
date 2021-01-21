import { v4 as uuidv4 } from 'uuid';

import asyncHandler from '../utils/asyncHandler.js'
import { InvalidCredentialError, UsedEmailError } from '../common/errors.js';
import userServices from '../services/user.services.js';
import { compareHash, hashPassword } from '../utils/encryptionUtils.js';
import { signUserToken } from '../utils/jwtHelpers.js';
import { checkRequiredFields } from '../utils/validator.js';

export default {
  login: asyncHandler(async (req, res) => {
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

  signUp: asyncHandler(async (req, res) => {
    checkRequiredFields(req.body, ['email', 'password']);

    const { email, full_name, password, phone } = req.body;

    const existedUser = userServices.getUserByEmail(email);
    if (existedUser) throw new UsedEmailError();

    const hashPwd = await hashPassword(password);

    userServices.saveUser({
      id: uuidv4(),
      email,
      full_name: full_name || null,
      password: hashPwd,
      phone: phone || null
    });

    return res.json({ sucess: true });
  })
}