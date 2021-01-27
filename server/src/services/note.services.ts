import db from '../db';
import { NotFoundNoteError } from '../common/errors'
import Note from '../models/Note';

export default {
  /**
   * 
   * @param {string} userId
   */
  getAllNotes: (userId: string) => {
    const notes = db.notes.JSON();

    const userNoteIds = Object.keys(notes).filter((id: string) => notes[id].userId === userId);
    return userNoteIds.map(id => ({
      id,
      ...notes[id]
    }))
  },

  /**
   * 
   * @param {string} userId
   * @param {Note} note 
   */
  createNote: (userId: string, note: Note) => {
    return db.notes.set(note.id, { content: note.content, userId });
  },

  /**
   * 
   * @param {string} noteId 
   * @param {string} newContent 
   */
  editNote: (noteId: string, newContent: string) => {
    const note = db.notes.get(noteId);
    if (!note) throw new NotFoundNoteError();
    const { content, ...metadata } = note;
    if (content !== newContent) {
      db.notes.set(noteId, {
        content: newContent,
        ...metadata
      });
    }
  },

  /**
   * 
   * @param {string} noteId 
   */
  deleteNote: (noteId: string) => {
    const isDeleted = db.notes.delete(noteId);
    if (!isDeleted) throw new NotFoundNoteError();
  }
}
