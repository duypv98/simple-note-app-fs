import React, {
  memo, useCallback, useRef
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import '../assets/css/note.css';

import { actEditNote, actSetDraft, actRemoveNote } from '../redux/actions/note.actions';
import { del, patch } from '../utils/request';

const Note = (props: any) => {
  const { noteId } = props;
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  const { content: noteContent, draft } = useSelector((state: any) => state.notes[noteId]);

  const changeContent = useCallback((e: any) => {
    dispatch(actEditNote(noteId, e.target.value));
  }, []);

  const updateContent = () => {
    if (draft !== noteContent) {
      const token = localStorage.getItem('token');
      patch(`/notes/${noteId}`, { content: noteContent }, token)
        .then((data) => {
          console.log(data);
          const { error } = data;
          if (error) {
            dispatch(actEditNote(noteId, draft));
          } else {
            dispatch(actSetDraft(noteId, noteContent));
          }
        });
    }
  };

  const removeNote = useCallback(() => {
    const token = localStorage.getItem('token');
    del(`/notes/${noteId}`, null, token)
      .then((data) => {
        const { error } = data;
        if (!error) {
          dispatch(actRemoveNote(noteId));
        }
      });
  }, []);

  return (
    <div className="col-md-4" style={{ marginTop: 10 }}>
      <div className="card bg-warning">
        <div className="card-body" style={{ height: 200 }}>
          <textarea
            ref={inputRef}
            style={{ height: 180, overflowY: 'scroll', width: '100%' }}
            value={noteContent}
            onChange={(e) => changeContent(e)}
            onMouseLeave={() => updateContent()}
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
