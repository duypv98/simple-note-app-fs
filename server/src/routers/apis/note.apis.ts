import { Router } from 'express';

import { verifyToken } from '../../middlewares/authMiddlewares'
import noteControllers from '../../controllers/note.controllers';

const router: Router = Router();

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
