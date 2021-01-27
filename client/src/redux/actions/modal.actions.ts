import { modalActions } from '../../constants/actions';
import { Dispatcher } from '../types';

export const actToggleAlert: Dispatcher = (isShow: boolean, message?: string) => ({
  type: modalActions.TOGGLE,
  payload: { isShow, message }
});

export const actToggleRedirect: Dispatcher = (isShow: boolean) => ({
  type: modalActions.TOGGLE_REDIRECT,
  payload: { isShow }
});
