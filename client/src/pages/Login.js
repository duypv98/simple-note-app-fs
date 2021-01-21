import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { actLoginSuccess, actLoginFailure } from '../redux/actions/user.actions';
import { post } from '../utils/request';
import TextInput from '../components/Forms/TextInput';
import AppTitle from '../components/AppTitle';

function handleLogin(email, password) {
  return post('/auth/login', { email, password });
}

const Login = () => {
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

          dispatch(error ? actLoginFailure() : actLoginSuccess(response.data.token));
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
      </div>
    </>
  );
};

export default React.memo(Login);
