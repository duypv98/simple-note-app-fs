import { Router } from 'express';

import apis from './apis';

const router = Router();

router.use(apis);

export default router;
