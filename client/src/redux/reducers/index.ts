import { combineReducers } from 'redux';

import userReducers from './user.reducers';
import modalReducers from './modal.reducers';
import noteReducers from './note.reducers';

export default combineReducers({
  user: userReducers,
  modal: modalReducers,
  notes: noteReducers
});
