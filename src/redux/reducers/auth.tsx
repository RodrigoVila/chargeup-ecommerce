import {
  AUTH_LOADING,
  LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  LOGOUT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_ERROR,
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

  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: action.isAuthLoading,
      };
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
        user,
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
    case USER_LOGIN_ERROR:
    case REGISTER_USER_ERROR:
    case FETCH_USER_DETAILS_ERROR:
    case LOGOUT:
      clearLocalStorage();
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
