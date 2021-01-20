import db from '../db/index.js';
import { NotFoundNoteError } from '../common/errors.js'

export default {
  /**
   * 
   * @param {string} userId
   */
  getAllNotes: (userId) => {
    const notes = db.notes.JSON();

    const userNoteIds = Object.keys(notes).filter(id => notes[id].userId === userId);
    return userNoteIds.map(id => ({
      id,
      ...notes[id]
    }))
  },

  /**
   * 
   * @param {string} userId 
   * @param {string} noteId 
   * @param {string} content 
   */
  createNote: (userId, noteId, content) => {
    return db.notes.set(noteId, { content, userId });
  },

  /**
   * 
   * @param {string} noteId 
   * @param {string} newContent 
   */
  editNote: (noteId, newContent) => {
    const note = db.notes.get(noteId);
    if (!note) throw new NotFoundNoteError();
    const { content, ...metadata } = note;
    if (content !== newContent) {
      db.notes.delete(noteId);
      db.notes.set(noteId, {
        content,
        ...metadata
      });
    }
  },

  /**
   * 
   * @param {string} noteId 
   */
  deleteNote: (noteId) => {
    const isDeleted = db.notes.delete(noteId);
    if (!isDeleted) throw new NotFoundNoteError();
  }
}
