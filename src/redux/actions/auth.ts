import {
  AUTH_LOADING,
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

export const registerNewUser = (user: UserType) => ({
  type: REGISTER_USER,
  user,
});

export const successRegisterUser = (user: UserType) => ({
  type: REGISTER_USER_SUCCESS,
  user,
});

export const errorRegisterUser = () => ({
  type: REGISTER_USER_FAIL,
});

export const loginUser = (user: UserType) => ({
  type: LOGIN_USER,
  user,
});

export const successLoginUser = (user: UserType) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const errorLoginUser = () => ({
  type: LOGIN_FAIL,
});

export const logoutUser = () => ({ type: LOGOUT });
