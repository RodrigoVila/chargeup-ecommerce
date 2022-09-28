import {
  AUTH_LOADING,
  CHECK_USER_TOKEN,
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_ERROR,
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
export const fetchUserDetails = () => ({
  type: FETCH_USER_DETAILS,
});
export const fetchUserDetailsSuccess = (user: UserDetailsType) => ({
  type: FETCH_USER_DETAILS_SUCCESS,
  user,
});
export const fetchUserDetailsError = () => ({
  type: FETCH_USER_DETAILS_ERROR,
});

export const userTokenCheck = (user: UserLoginType) => ({
  type: CHECK_USER_TOKEN,
  user,
});

export const loginUser = (user: UserLoginType) => ({
  type: LOGIN_USER,
  user,
});

export const successLoginUser = (user: UserLoginType) => ({
  type: LOGIN_SUCCESS,
  user,
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
