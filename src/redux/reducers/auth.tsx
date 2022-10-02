import {
  AUTH_LOADING,
  LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  LOGOUT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from '../actions/types';
import { clearLocalStorage, setValueToLocalStorage } from '@utils/localStorage';
import { LOCAL_STORAGE_DATA_KEY, AUTH_INITIAL_STATE } from '@constants';

const authReducer = (state: AuthStateType = AUTH_INITIAL_STATE, action: AuthActionType) => {
  const { type, userLogin } = action;

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
      userLogin && setValueToLocalStorage(LOCAL_STORAGE_DATA_KEY, userLogin);
      return {
        ...state,
        isLoggedIn: true,
        isAuthLoading: false,
        userLogin,
      };
    case USER_LOGIN_ERROR:
    case REGISTER_USER_ERROR:
    case LOGOUT:
      clearLocalStorage();
      return {
        ...state,
        isLoggedIn: false,
        isAuthLoading: false,
        userLogin: null,
      };
    default:
      return state;
  }
};

export default authReducer;
