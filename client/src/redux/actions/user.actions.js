import { userActions } from '../../constants/actions';

export const actLoginSuccess = (token) => ({
  type: userActions.LOGIN_SUCCESS,
  payload: { token }
});

export const actLoginFailure = () => ({
  type: userActions.LOGIN_FAILURE,
  payload: {}
});

export const actSetLoginEmail = (email) => ({
  type: userActions.SET_LOGIN_EMAIL,
  payload: { email }
});
