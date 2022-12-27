import {
  LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  LOGOUT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  VALIDATE_EMAIL_IN_DB_SUCCESS,
  VALIDATE_EMAIL_IN_DB_ERROR,
} from '../../constants/ActionTypes';
import { clearLocalStorage, setValueToLocalStorage } from '@utils/localStorage';
import { LOCAL_STORAGE_DATA_KEY } from '@constants/keys';
import { AUTH_INITIAL_STATE } from '@constants/initialState';

const authReducer = (state: AuthStateType = AUTH_INITIAL_STATE, action: AuthActionType) => {
  const { type, userLogin } = action;

  switch (type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      userLogin && setValueToLocalStorage(LOCAL_STORAGE_DATA_KEY, userLogin);
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userLogin,
      };
    case USER_LOGIN_ERROR:
    case REGISTER_USER_ERROR:
    case LOGOUT:
      clearLocalStorage();
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        userLogin: null,
      };
    case VALIDATE_EMAIL_IN_DB_SUCCESS:
      return {
        ...state,
        isEmailValidated: true,
      };
    case VALIDATE_EMAIL_IN_DB_ERROR:
      return {
        ...state,
        isEmailValidated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
