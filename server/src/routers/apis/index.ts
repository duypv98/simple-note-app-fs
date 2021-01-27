import { Router } from 'express';

import authApis from './auth.apis';
import userApis from './user.apis';
import noteApis from './note.apis';

const router = Router();

router.use('/auth', authApis);
router.use('/users', userApis);
router.use('/notes', noteApis);

export default router;
