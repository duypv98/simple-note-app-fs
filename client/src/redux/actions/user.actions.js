import { userActions } from '../../constants/actions';

export const actLoginSuccess = (token) => ({
  type: userActions.LOGIN_SUCCESS,
  payload: { token }
});

export const actLogout = () => ({
  type: userActions.LOGOUT,
  payload: {}
});

export const actLoadInfo = (fullName, email, phone) => ({
  type: userActions.LOAD_INFO,
  payload: { fullName, email, phone }
});
