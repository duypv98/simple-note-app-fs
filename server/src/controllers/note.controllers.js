import { v4 as uuidv4 } from 'uuid';

import { getUserIdFromCredentials } from '../utils/jwtHelpers.js'
import { checkRequiredFields } from '../utils/validator.js';
import noteServices from '../services/note.services.js';

export default {
  getNotes: (req, res) => {
    const userId = getUserIdFromCredentials(req);

    const notes = noteServices.getAllNotes(userId);

    return res.json({
      notes
    });
  },

  createNote: (req, res) => {
    checkRequiredFields(req.body, ['content']);
    const userId = getUserIdFromCredentials(req);

    const noteId = uuidv4();

    noteServices.createNote(userId, noteId, req.body.content);

    return res.json({ noteId });
  },

  editNote: (req, res) => {
    checkRequiredFields(req.body, ['content']);
    checkRequiredFields(req.params, ['noteId']);

    const { noteId } = req.params;
    const { content } = req.body;

    noteServices.editNote(noteId, content);

    return res.json({ success: true });
  },

  deleteNote: (req, res) => {
    checkRequiredFields(req.params, ['noteId']);

    noteServices.deleteNote(req.params.noteId);
    return res.json({ success: true });
  }
}