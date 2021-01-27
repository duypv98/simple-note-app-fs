import { userActions } from '../../constants/actions';
import { Dispatcher } from '../types';

export const actLoginSuccess: Dispatcher = (token: string) => ({
  type: userActions.LOGIN_SUCCESS,
  payload: { token }
});

export const actLogout: Dispatcher = () => ({
  type: userActions.LOGOUT,
  payload: {}
});

export const actLoadInfo: Dispatcher = (fullName: string, email: string, phone: string) => ({
  type: userActions.LOAD_INFO,
  payload: { fullName, email, phone }
});
