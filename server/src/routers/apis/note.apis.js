import express from 'express';

import { verifyToken } from '../../middlewares/authMiddlewares.js'
import noteControllers from '../../controllers/note.controllers.js';

const router = express.Router();

router.route('/')
  .get(
    verifyToken,
    noteControllers.getNotes
  )
  .post(
    verifyToken,
    noteControllers.createNote
  );

router.route('/:noteId')
  .patch(
    verifyToken,
    noteControllers.editNote
  )
  .delete(
    verifyToken,
    noteControllers.deleteNote
  )

export default router;
