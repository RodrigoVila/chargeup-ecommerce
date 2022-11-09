import { APP_USER_INITIAL_STATE, USERS_INITIAL_STATE } from '@constants';
import {
  FETCH_USER_DETAILS_ERROR,
  FETCH_USER_DETAILS_SUCCESS,
  REQUEST_CHANGE_USER_DETAILS_SUCCESS,
  REQUEST_CHANGE_USER_DETAILS_ERROR,
} from '../actions/types';

const usersReducer = (state = USERS_INITIAL_STATE, action: UsersActionType) => {
  const { type, user } = action;

  switch (type) {
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isUserDataLoading: false,
        user,
      };
    case FETCH_USER_DETAILS_ERROR:
      return {
        ...state,
        isUserDataLoading: false,
        user: APP_USER_INITIAL_STATE,
      };
    case REQUEST_CHANGE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isUserDataLoading: false,
      };
    case REQUEST_CHANGE_USER_DETAILS_ERROR:
      return {
        ...state,
        isUserDataLoading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
