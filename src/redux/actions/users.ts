import { FETCH_USER_DETAILS, FETCH_USER_DETAILS_ERROR, FETCH_USER_DETAILS_SUCCESS, USER_DETAILS_LOADING } from './types';

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

export const setUserDataLoading = (isUserDataLoading: boolean) => ({
  type: USER_DETAILS_LOADING,
  isUserDataLoading,
});
