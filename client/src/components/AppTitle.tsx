import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { actLogout } from '../redux/actions/user.actions';
import FloatRightButton from './Navs/FloatRightBtn';

const AppTitle = () => {
  const dispatch = useDispatch();
  const isLoggedIn: boolean = useSelector((state: any) => state.user.isLoggedIn);
  const history = useHistory();
  const handleLogout = () => {
    dispatch(actLogout());
    history.push('/login');
  };
  return (
    <div style={{ textAlign: 'center', width: '100vw' }}>
      {isLoggedIn
        ? <FloatRightButton value="Logout" onClick={handleLogout} />
        : null}
      <h1>Sample Note App</h1>

    </div>
  );
};

export default AppTitle;
