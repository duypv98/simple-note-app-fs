import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { actLoginSuccess, actLoginFailure } from '../redux/actions/user.actions';
import { post } from '../utils/request';

function handleLogin(email, password) {
  return post('/auth/login', { email, password });
}

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  return (
    <div className="container" style={{ paddingTop: '5%' }}>
      <form onSubmit={async (e) => {
        e.preventDefault();
        const { error, ...response } = await handleLogin(
          emailInputRef.current.value,
          passwordInputRef.current.value
        );

        dispatch(error ? actLoginFailure() : actLoginSuccess(response.data.token));
      }}
      >
        <div className="form-group">
          <label htmlFor="email-inp">Email:</label>
          <input
            ref={emailInputRef}
            type="text"
            className="form-control"
            name="email"
            id="email-inp"
            placeholder="user@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-inp">Password:</label>
          <input
            ref={passwordInputRef}
            type="password"
            className="form-control"
            name="password"
            id="password-inp"
            placeholder="password..."
          />
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary btn-lg">
            Login
          </button>
          <div style={{ marginTop: '10px' }}>
            <span>
              Don&#39;t have an Account?
            </span>
            <a href="https://google.com" style={{ marginLeft: '10px' }}>Sign up</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(LoginForm);
