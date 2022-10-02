import {
  AUTH_LOADING,
  CHECK_USER_TOKEN,
  LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  LOGOUT,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './types';

export const setAuthLoading = (isAuthLoading: boolean) => ({
  type: AUTH_LOADING,
  isAuthLoading,
});

export const userTokenCheck = (user: UserLoginType) => ({
  type: CHECK_USER_TOKEN,
  user,
});

export const loginUser = (user: UserLoginType) => ({
  type: LOGIN_USER,
  user,
});

export const successLoginUser = (userLogin: StorageUserType) => ({
  type: LOGIN_SUCCESS,
  userLogin,
});

export const errorLoginUser = () => ({
  type: USER_LOGIN_ERROR,
});

export const logoutUser = () => ({ type: LOGOUT });

export const registerNewUser = (user: UserRegisterType) => ({
  type: REGISTER_USER,
  user,
});

export const successRegisterUser = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const errorRegisterUser = () => ({
  type: REGISTER_USER_ERROR,
});
