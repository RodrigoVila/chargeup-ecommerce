import {
  AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from '../actions/types';
import { clearLocalStorage, setValueToLocalStorage } from '@utils/localStorage';
import { LOCAL_STORAGE_DATA_KEY } from '@constants';

const INITIAL_STATE = {
  isLoggedIn: false,
  isAuthLoading: false,
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, user } = action;
  type === 'LOGIN_SUCCESS' && console.log(action, 'ACTION');

  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: action.isAuthLoading,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
      };
    case LOGIN_SUCCESS:
      user && setValueToLocalStorage(LOCAL_STORAGE_DATA_KEY, user);
      return {
        ...state,
        isLoggedIn: true,
        isAuthLoading: false,
        user,
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
