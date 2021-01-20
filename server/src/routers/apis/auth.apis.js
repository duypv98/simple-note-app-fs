import express from 'express';
import authControllers from '../../controllers/auth.controllers.js';

const router = express.Router();

router.post(
  '/login',
  authControllers.login
);

router.post(
  '/sign-up',
  authControllers.signUp
);

export default router;

