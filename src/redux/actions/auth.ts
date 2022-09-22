import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_USER,
} from './types';

export const registerNewUser = (user: UserType) => ({
  type: REGISTER_USER,
  user,
});

export const successRegisterUser = (user: UserType) => ({
  type: REGISTER_USER_SUCCESS,
  user,
});

export const errorRegisterUser = (error: any) => ({
  type: REGISTER_USER_FAIL,
  error,
});

export const loginUser = (user: UserType) => ({
  type: LOGIN_USER,
  user,
});

export const successLoginUser = (email: string, password: string) => ({
  type: LOGIN_SUCCESS,
  email,
  password,
});

export const errorLoginUser = (error: any) => ({
  type: LOGIN_FAIL,
  error,
});

export const logoutUser = () => ({ type: LOGOUT });
