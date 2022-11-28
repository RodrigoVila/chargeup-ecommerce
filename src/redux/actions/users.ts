import {
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_ERROR,
  FETCH_USER_DETAILS_SUCCESS,
  REQUEST_CHANGE_USER_DETAILS,
  REQUEST_CHANGE_USER_DETAILS_SUCCESS,
  REQUEST_CHANGE_USER_DETAILS_ERROR,
  REQUEST_CHANGE_USER_PASSWORD,
  REQUEST_CHANGE_USER_PASSWORD_SUCCESS,
  REQUEST_CHANGE_USER_PASSWORD_ERROR,
} from './types';

export const fetchUserDetails = () => ({
  type: FETCH_USER_DETAILS,
});
export const fetchUserDetailsSuccess = (user: UserDetailsType) => ({
  type: FETCH_USER_DETAILS_SUCCESS,
  user,
});
export const fetchUserDetailsError = (error: Error) => ({
  type: FETCH_USER_DETAILS_ERROR,
  error,
});

export const changeUserDetails = (user: UserDetailsType) => ({
  type: REQUEST_CHANGE_USER_DETAILS,
  user,
});

export const changeUserDetailsSuccess = () => ({
  type: REQUEST_CHANGE_USER_DETAILS_SUCCESS,
});

export const changeUserDetailsError = (error: Error) => ({
  type: REQUEST_CHANGE_USER_DETAILS_ERROR,
  error,
});

export const changeUserPassword = (oldPassword: string, password: string) => ({
  type: REQUEST_CHANGE_USER_PASSWORD,
  oldPassword,
  password,
});

export const changeUserPasswordSuccess = () => ({
  type: REQUEST_CHANGE_USER_PASSWORD_SUCCESS,
});

export const changeUserPasswordError = (error: Error) => ({
  type: REQUEST_CHANGE_USER_PASSWORD_ERROR,

  error,
});
