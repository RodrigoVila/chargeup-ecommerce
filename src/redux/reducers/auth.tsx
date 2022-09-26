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
  const { type, user } = action;

  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: action.isAuthLoading,
      };
    case LOGIN_SUCCESS:
      const loginStorageData = {
        isLoggedIn: true,
        user: {
          email: user.email,
          token: user.token,
        },
      };
      user.token && setValueToLocalStorage(LOCAL_STORAGE_KEY, loginStorageData);
      return {
        ...state,
        isLoggedIn: true,
        isAuthLoading: false,
        user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isAuthLoading: false,
        user: null,
      };
    case LOGOUT:
      clearLocalStorage();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case REGISTER_USER_SUCCESS:
      const registerStorageData = {
        isLoggedIn: true,
        user: {
          email: user.email,
          token: user.token,
        },
      };
      user.token && setValueToLocalStorage(LOCAL_STORAGE_KEY, registerStorageData);
      return {
        ...state,
        isLoggedIn: true,
        isAuthLoading: false,
        user,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isAuthLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
