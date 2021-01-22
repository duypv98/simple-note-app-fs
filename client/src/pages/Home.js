import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppTitle from '../components/AppTitle';

import TextInputBtn from '../components/Forms/TextInputBtn';
import AlertModal from '../components/Modals/AlertModal';
import Note from '../components/Note';
import UserInfo from '../components/UserInfo';
import { actToggleAlert } from '../redux/actions/modal.actions';
import { actFetchNotes } from '../redux/actions/note.actions';
import { actLoadInfo } from '../redux/actions/user.actions';
import { get } from '../utils/request';

const Home = () => {
  const modalState = useSelector((state) => state.modal);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes);
  const userInfo = useSelector((state) => state.user.info);

  const [isLoading, setLoading] = useState(true);
  useEffect(async () => {
    const allNotes = {};
    const [notesData, userData] = await Promise.all([
      get('/notes', null, token),
      get('/users/me', null, token)
    ]);
    if (notesData.error || userData.error) {
      dispatch(actToggleAlert(true, 'Fetch error'));
    } else {
      const { full_name: fullName, email, phone } = userData.data;
      notesData.data.notes.forEach((note) => {
        Object.assign(allNotes, {
          [note.id]: {
            content: note.content,
            draft: note.content
          }
        });
      });
      dispatch(actFetchNotes(allNotes));
      dispatch(actLoadInfo(fullName, email, phone));
    }
    setLoading(false);
  }, []);
  return (
    <>
      <div
        className="row"
        style={{
          marginTop: '1%', marginLeft: '1%', paddingRight: '1%', width: '99%'
        }}
      >
        <AppTitle />
        <UserInfo email={userInfo.email} fullName={userInfo.fullName} phone={userInfo.phone} />
        <TextInputBtn />
        {isLoading ? <p>Loading...</p> : Object.keys(notes).map((noteId) => (
          <Note noteId={noteId} key={noteId} />
        ))}
        <AlertModal title="Error" message={modalState.message} isShow={modalState.isShowAlert} />
      </div>
    </>
  );
};

export default memo(Home);
