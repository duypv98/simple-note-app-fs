import { Router } from 'express';

import { verifyToken } from '../../middlewares/authMiddlewares'
import userControllers from '../../controllers/user.controllers';

const router: Router = Router();

router.get(
  '/me',
  verifyToken,
  userControllers.getUserMe
);

export default router;
