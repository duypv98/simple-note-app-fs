import express from 'express';

import authApis from './auth.apis.js';
import userApis from './user.apis.js';

const router = express.Router();

router.use('/auth', authApis);
router.use('/users', userApis);

export default router;
