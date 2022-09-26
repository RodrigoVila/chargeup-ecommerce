import {
  AUTH_LOADING,
  CHECK_USER_TOKEN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from './types';

export const setAuthLoading = (isAuthLoading: boolean) => ({
  type: AUTH_LOADING,
  isAuthLoading,
});

export const userTokenCheck = (email: string, token: string) => ({
  type: CHECK_USER_TOKEN,
  email,
  token,
});

export const loginUser = (user: UserType) => ({
  type: LOGIN_USER,
  user,
});

export const successLoginUser = (email: string, token: string) => ({
  type: LOGIN_SUCCESS,
  email,
  token,
});

export const errorLoginUser = () => ({
  type: LOGIN_FAIL,
});

export const logoutUser = () => ({ type: LOGOUT });

export const registerNewUser = (user: UserType) => ({
  type: REGISTER_USER,
  user,
});

export const successRegisterUser = (email: string, token: string) => ({
  type: REGISTER_USER_SUCCESS,
  email,
  token,
});

export const errorRegisterUser = () => ({
  type: REGISTER_USER_FAIL,
});
