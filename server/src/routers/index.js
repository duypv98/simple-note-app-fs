import express from 'express';

import apis from './apis/index.js';

const router = express.Router();

router.use(apis);

export default router;
