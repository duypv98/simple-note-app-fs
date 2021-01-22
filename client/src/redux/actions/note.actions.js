/* eslint-disable import/prefer-default-export */
import { noteActions } from '../../constants/actions';

export const actAddNote = (id, content) => ({
  type: noteActions.ADD_NOTE,
  payload: { id, content }
});

export const actEditNote = (id, content) => ({
  type: noteActions.EDIT_NOTE,
  payload: { id, content }
});

export const actRemoveNote = (id) => ({
  type: noteActions.REMOVE_NOTE,
  payload: { id }
});

export const actSetDraft = (id, draft) => ({
  type: noteActions.SET_DRAFT,
  payload: { id, draft }
});
