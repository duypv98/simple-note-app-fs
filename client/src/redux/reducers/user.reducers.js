import { userActions } from '../../constants/actions';

const userToken = localStorage.getItem('token');
const inititalState = userToken ? { isLoggedIn: true } : { isLoggedIn: false };

export default (state = inititalState, action) => {
  switch (action.type) {
    case userActions.LOGIN_SUCCESS: {
      const { token } = action.payload;
      localStorage.setItem('token', token);
      return {
        ...state,
        isLoggedIn: true
      };
    }

    case userActions.LOGIN_FAILURE: {
      localStorage.removeItem('token');
      return {
        ...state,
        isLoggedIn: false
      };
    }

    default:
      return state;
  }
};
