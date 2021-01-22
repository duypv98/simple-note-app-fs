import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { actLoginSuccess } from '../redux/actions/user.actions';
import { actToggleAlert } from '../redux/actions/modal.actions';
import { post } from '../utils/request';
import TextInput from '../components/Forms/TextInput';
import AppTitle from '../components/AppTitle';
import AlertModal from '../components/Modals/AlertModal';

function handleLogin(email, password) {
  return post('/auth/login', { email, password });
}

const Login = () => {
  const modalState = useSelector((state) => state.modal);
  const inputRefs = useRef({});
  useEffect(() => {
    ['email', 'password'].forEach((field) => { inputRefs.current[field].value = ''; });
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <AppTitle />
      <div className="container" style={{ paddingTop: '5%' }}>
        <form onSubmit={async (e) => {
          e.preventDefault();
          const { error, ...response } = await handleLogin(
            inputRefs.current.email.value,
            inputRefs.current.password.value
          );

          if (error) {
            dispatch(actToggleAlert(true, response.message));
          } else {
            dispatch(actLoginSuccess(response.data.token));
          }
        }}
        >
          <TextInput
            type="text"
            label="Email"
            name="email"
            placeholder="admin@example.com"
            ref={(el) => { inputRefs.current.email = el; }}
          />
          <TextInput
            type="password"
            label="Password"
            name="password"
            placeholder="password..."
            ref={(el) => { inputRefs.current.password = el; }}
          />
          <div className="card-footer">
            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
            <div style={{ marginTop: '10px' }}>
              <span>
                Don&#39;t have an Account?
                {' '}
              </span>
              <Link to="/sign-up">Sign Up</Link>
            </div>
          </div>
        </form>
        <AlertModal title="Error" message={modalState.message} isShow={modalState.isShowAlert} />
      </div>
    </>
  );
};

export default React.memo(Login);
