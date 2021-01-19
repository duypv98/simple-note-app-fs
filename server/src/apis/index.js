import express from 'express';

import authApis from './auth.apis.js';

const router = express.Router();

router.use('/auth', authApis);

export default router;
