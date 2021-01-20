import { userActions } from '../../constants/actions';

export const actLoginSuccess = (token) => ({
  type: userActions.LOGIN_SUCCESS,
  payload: { token }
});

export const actLoginFailure = () => ({
  type: userActions.LOGIN_FAILURE,
  payload: {}
});
