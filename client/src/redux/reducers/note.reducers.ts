import { noteActions } from '../../constants/actions';
import { IAction } from '../types';
import { INoteState } from '../types/stateTypes';

const inititalState: INoteState = {};

export default (state = inititalState, action: IAction) => {
  switch (action.type) {
    case noteActions.ADD_NOTE: {
      const { id, content } = action.payload;
      return {
        ...state,
        [id]: {
          content,
          draft: content
        },
      };
    }

    case noteActions.EDIT_NOTE: {
      const { content, id } = action.payload;

      const editId = Object.prototype.hasOwnProperty.call(state, id);
      if (!editId) return state;

      const editNote = {
        [id]: {
          ...state[id],
          content
        }
      };

      return {
        ...state,
        ...editNote
      };
    }

    case noteActions.REMOVE_NOTE: {
      const { id } = action.payload;
      if (state[id]) {
        const newState = {};
        Object
          .keys(state)
          .filter((noteId) => noteId !== id)
          .forEach((noteId) => {
            Object.assign(newState, { [noteId]: state[noteId] });
          });
        return newState;
      }
      return state;
    }

    case noteActions.SET_DRAFT: {
      const { id, draft } = action.payload;
      if (state[id]) {
        Object.assign(state, {
          [id]: {
            ...state[id],
            draft
          }
        });
      }
      return state;
    }

    case noteActions.FETCH_NOTES: {
      const { notes } = action.payload;
      return {
        ...state,
        ...notes
      };
    }

    default:
      return state;
  }
};
