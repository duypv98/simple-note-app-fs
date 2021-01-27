import { noteActions } from '../../constants/actions';
import { Dispatcher } from '../types';

export const actAddNote: Dispatcher = (id: string, content: string) => ({
  type: noteActions.ADD_NOTE,
  payload: { id, content }
});

export const actEditNote: Dispatcher = (id: string, content: string) => ({
  type: noteActions.EDIT_NOTE,
  payload: { id, content }
});

export const actRemoveNote: Dispatcher = (id: string) => ({
  type: noteActions.REMOVE_NOTE,
  payload: { id }
});

export const actSetDraft: Dispatcher = (id: string, draft: string) => ({
  type: noteActions.SET_DRAFT,
  payload: { id, draft }
});

export const actFetchNotes: Dispatcher = (notes: any) => ({
  type: noteActions.FETCH_NOTES,
  payload: { notes }
});
