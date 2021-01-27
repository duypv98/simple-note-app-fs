
import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { getUserIdFromCredentials } from '../utils/jwtHelpers'
import { checkRequiredFields } from '../utils/validator';
import noteServices from '../services/note.services';
import Note from '../models/Note';

export default {
  getNotes: (req: any, res: Response) => {
    const userId = getUserIdFromCredentials(req);

    const notes = noteServices.getAllNotes(userId);

    return res.json({
      notes
    });
  },

  createNote: (req: any, res: Response) => {
    checkRequiredFields(req.body, ['content']);
    const userId = getUserIdFromCredentials(req);

    const newNote = new Note({ id: uuidv4(), content: String(req.body.content) });

    noteServices.createNote(userId, newNote);

    return res.json({ noteId: newNote.id });
  },

  editNote: (req: any, res: Response) => {
    checkRequiredFields(req.body, ['content']);
    checkRequiredFields(req.params, ['noteId']);

    const { noteId } = req.params;
    const { content } = req.body;

    noteServices.editNote(noteId, content);

    return res.json({ success: true });
  },

  deleteNote: (req: any, res: Response) => {
    checkRequiredFields(req.params, ['noteId']);

    noteServices.deleteNote(req.params.noteId);
    return res.json({ success: true });
  }
}