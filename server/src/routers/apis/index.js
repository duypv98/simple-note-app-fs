import express from 'express';

import authApis from './auth.apis.js';
import userApis from './user.apis.js';
import noteApis from './note.apis.js';

const router = express.Router();

router.use('/auth', authApis);
router.use('/users', userApis);
router.use('/notes', noteApis);

export default router;
