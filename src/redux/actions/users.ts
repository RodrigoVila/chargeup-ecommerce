import { TFunction } from 'i18next';
import { UserDetailsType } from 'types';
import {
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_ERROR,
  FETCH_USER_DETAILS_SUCCESS,
  REQUEST_CHANGE_USER_DETAILS,
  REQUEST_CHANGE_USER_DETAILS_ERROR,
  REQUEST_CHANGE_USER_DETAILS_SUCCESS,
} from '../../constants/ActionTypes';

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

export const changeUserDetails = (
  user: UserDetailsType,
  t: TFunction<'translation', undefined>
) => ({
  type: REQUEST_CHANGE_USER_DETAILS,
  user,
  t,
});

export const changeUserDetailsSuccess = () => ({
  type: REQUEST_CHANGE_USER_DETAILS_SUCCESS,
});

export const changeUserDetailsError = (error: Error) => ({
  type: REQUEST_CHANGE_USER_DETAILS_ERROR,
  error,
});
