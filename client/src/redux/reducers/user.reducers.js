import { userActions } from '../../constants/actions';

const userToken = localStorage.getItem('token');
const inititalState = {
  isLoggedIn: !!userToken,
  info: {
    fullName: null,
    email: null,
    phone: null
  }
};

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

    case userActions.LOGOUT: {
      localStorage.removeItem('token');
      return {
        ...state,
        isLoggedIn: false
      };
    }

    case userActions.LOAD_INFO: {
      const { fullName, email, phone } = action.payload;
      return {
        ...state,
        info: {
          fullName,
          email,
          phone
        }
      };
    }

    default:
      return state;
  }
};
