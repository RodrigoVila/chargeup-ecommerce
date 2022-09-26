import {
  AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from '../actions/types';
import { clearLocalStorage, setValueToLocalStorage } from '@utils/localStorage';
import { LOCAL_STORAGE_KEY } from '@constants';

const INITIAL_STATE = {
  isLoggedIn: false,
  isAuthLoading: false,
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, email, token } = action;
  type === 'LOGIN_SUCCESS' && console.log(action, 'ACTION');

  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: action.isAuthLoading,
      };

    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
      const data = {
        isLoggedIn: true,
        user: { email, token },
      };
      token && setValueToLocalStorage(LOCAL_STORAGE_KEY, data);
      return {
        ...state,
        isLoggedIn: true,
        isAuthLoading: false,
        user: { email, token },
      };
    case LOGOUT:
      clearLocalStorage();
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isAuthLoading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
