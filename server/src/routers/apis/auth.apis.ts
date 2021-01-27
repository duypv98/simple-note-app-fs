import { Router } from 'express';
import authControllers from '../../controllers/auth.controllers';

const router: Router = Router();

router.post(
  '/login',
  authControllers.login
);

router.post(
  '/sign-up',
  authControllers.signUp
);

export default router;
