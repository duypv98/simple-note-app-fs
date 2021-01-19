import express from 'express';
import authControllers from '../controllers/auth.controllers.js';
import authValidations from '../validations/auth.validations.js';

import authRoutes from './routes/auth.routes.js';

const router = express.Router();

router.post(
  authRoutes.LOGIN,
  authValidations.login,
  authControllers.login
);

router.post(
  authRoutes.SIGN_UP,
  authValidations.signUp,
  authControllers.signUp
);

export default router;

