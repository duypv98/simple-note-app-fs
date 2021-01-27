import { modalActions } from '../../constants/actions';
import { IAction } from '../types';
import { IModalState } from '../types/stateTypes';

const inititalState: IModalState = {
  isShowAlert: false, message: '', isShowRedirect: false
};

export default (state = inititalState, action: IAction) => {
  switch (action.type) {
    case modalActions.TOGGLE: {
      const { isShow, message } = action.payload;
      if (isShow === state.isShowAlert) return state;
      return {
        ...state,
        isShowAlert: isShow,
        message: message ?? state.message
      };
    }

    case modalActions.TOGGLE_REDIRECT: {
      const { isShow } = action.payload;
      if (isShow === state.isShowRedirect) return state;
      return {
        ...state,
        isShowRedirect: isShow
      };
    }

    default:
      return state;
  }
};
