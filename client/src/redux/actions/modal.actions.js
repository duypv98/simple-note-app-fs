/* eslint-disable import/prefer-default-export */
import { modalActions } from '../../constants/actions';

export const actToggleAlert = (isShow, message) => ({
  type: modalActions.TOGGLE,
  payload: { isShow, message }
});

export const actToggleRedirect = (isShow) => ({
  type: modalActions.TOGGLE_REDIRECT,
  payload: { isShow }
});
