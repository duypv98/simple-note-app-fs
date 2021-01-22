import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { actToggleAlert, actToggleRedirect } from '../redux/actions/modal.actions';
import { post } from '../utils/request';
import TextInput from '../components/Forms/TextInput';
import AppTitle from '../components/AppTitle';
import AlertModal from '../components/Modals/AlertModal';
import RedirectModal from '../components/Modals/RedirectModal';

const fields = [
  {
    label: 'Email', name: 'email', type: 'text', placeholder: 'admin@example.com', required: true
  },
  {
    label: 'Password', name: 'password', type: 'password', placeholder: 'password...', required: true
  },
  {
    label: 'Confirm password', name: 'password_confirm', type: 'password', placeholder: 'confirm password...', required: true
  },
  {
    label: 'Full name', name: 'full_name', type: 'text', placeholder: 'your name...'
  },
  {
    label: 'Phone', name: 'phone', type: 'text', placeholder: '+123456789'
  }
];

function handleSignUp(currentInputValues) {
  const reqBody = {};
  if (currentInputValues.password.value === currentInputValues.password_confirm.value) {
    fields.forEach((field) => {
      Object.assign(reqBody, { [field.name]: currentInputValues[field.name].value });
    });
    return post('/auth/sign-up', reqBody);
  }
  return {
    error: true,
    message: 'Confirm password is not match'
  };
}

const SignUp = () => {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const inputRefs = useRef({});
  useEffect(() => {
    fields.forEach((field) => { inputRefs.current[field.name].value = ''; });
  }, []);

  return (
    <>
      <AppTitle />
      <div className="container" style={{ paddingTop: '5%' }}>
        <form onSubmit={async (e) => {
          e.preventDefault();
          const { error, ...response } = await handleSignUp(inputRefs.current);
          if (error) {
            dispatch(actToggleAlert(true, response.message));
          } else {
            dispatch(actToggleRedirect(true));
          }
        }}
        >
          {fields.map((field) => (
            <TextInput
              key={field.name}
              type={field.type}
              label={field.label}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              ref={(el) => { inputRefs.current[field.name] = el; }}
            />
          ))}
          <div className="card-footer">
            <button type="submit" className="btn btn-primary btn-lg">
              SignUp
            </button>
            <div style={{ marginTop: '10px' }}>
              <span>
                Have an Account?
                {' '}
              </span>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
        <AlertModal title="Error" message={modalState.message} isShow={modalState.isShowAlert} />
        <RedirectModal title="Success" message="Sign up successful! Click OK to continue" isShow={modalState.isShowRedirect} redirectPath="/login" />
      </div>
    </>
  );
};

export default React.memo(SignUp);
