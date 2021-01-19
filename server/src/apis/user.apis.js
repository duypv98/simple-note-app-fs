import express from 'express';

import userRoutes from './routes/user.routes.js';

const router = express.Router();

router.get(
  userRoutes.GET_PROFILE
);

export default router;

