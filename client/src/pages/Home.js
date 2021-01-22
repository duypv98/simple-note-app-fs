import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import TextInputBtn from '../components/Forms/TextInputBtn';
import Note from '../components/Note';

const Home = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <div className="row" style={{ marginTop: '3%' }}>
      <TextInputBtn />
      {Object.keys(notes).map((noteId) => (
        <Note noteId={noteId} key={noteId} />
      ))}
    </div>
  );
};

export default memo(Home);
