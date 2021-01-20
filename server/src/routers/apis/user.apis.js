import express from 'express';

import { verifyToken } from '../../middlewares/authMiddlewares.js'
import userControllers from '../../controllers/user.controllers.js';

const router = express.Router();

router.get(
  '/me',
  verifyToken,
  userControllers.getUserMe
);

export default router;
