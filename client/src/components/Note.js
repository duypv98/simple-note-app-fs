import React, {
  memo, useCallback, useRef
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import '../assets/css/note.css';

import { actEditNote, actSetDraft, actRemoveNote } from '../redux/actions/note.actions';
import { del, patch } from '../utils/request';

const Note = (props) => {
  const { noteId } = props;
  const inputRef = useRef();
  const dispatch = useDispatch();

  const { content: noteContent, draft } = useSelector((state) => state.notes[noteId]);

  const changeContent = useCallback((e) => {
    dispatch(actEditNote(noteId, e.target.value));
  });

  const updateContent = useCallback(async () => {
    if (draft !== noteContent) {
      const token = localStorage.getItem('token');
      const { error } = await patch(`/notes/${noteId}`, { content: noteContent }, token);
      if (error) {
        dispatch(actEditNote(noteId, draft));
      } else {
        dispatch(actSetDraft(noteId, noteContent));
      }
    }
  });

  const removeNote = useCallback(async () => {
    const token = localStorage.getItem('token');
    const { error } = await del(`/notes/${noteId}`, null, token);
    if (!error) {
      dispatch(actRemoveNote(noteId));
    }
  });

  return (
    <div className="col-md-4" style={{ marginTop: 10 }}>
      <div className="card bg-warning">
        <div className="card-body" style={{ height: 200 }}>
          <textarea
            ref={inputRef}
            style={{ height: 180, overflowY: 'scroll', width: '100%' }}
            value={noteContent}
            onChange={(e) => changeContent(e)}
            onMouseLeave={async () => { await updateContent(); }}
          />
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-danger btn-sm float-right" onClick={async () => { await removeNote(); }}>Delete</button>
        </div>
      </div>
    </div>
  );
};

Note.propTypes = {
  noteId: PropTypes.string
};

export default memo(Note);
