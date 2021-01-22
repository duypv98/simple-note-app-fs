import React, { memo, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { post } from '../../utils/request';
import AlertModal from '../Modals/AlertModal';
import { actAddNote } from '../../redux/actions/note.actions';
import { actToggleAlert } from '../../redux/actions/modal.actions';

const TextInputBtn = () => {
  const token = localStorage.getItem('token');
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const ref = useRef();

  const handleBtnClick = useCallback(async () => {
    const content = ref.current.value;

    const { error, ...response } = await post('/notes', { content }, token);
    if (error) {
      dispatch(actToggleAlert(true, response.message));
    } else {
      const { noteId } = response.data;
      dispatch(actAddNote(noteId, content));
      ref.current.value = '';
    }
  });

  return (
    <div className="col-md-12" style={{ marginBottom: 15 }}>
      <div className="input-group mb-8">
        <input
          type="text"
          className="form-control"
          placeholder="Enter text here..."
          ref={ref}
        />
        <div className="input-group-append">
          <button type="button" className="btn btn-primary" onClick={handleBtnClick}>
            Add
          </button>
        </div>
      </div>
      <AlertModal title="Error" message={modalState.message} isShow={modalState.isShowAlert} />
    </div>
  );
};

export default memo(TextInputBtn);
