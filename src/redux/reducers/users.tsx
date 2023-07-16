import {
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_ERROR,
  FETCH_USER_DETAILS_SUCCESS,
  REQUEST_CHANGE_USER_DETAILS,
  REQUEST_CHANGE_USER_DETAILS_ERROR,
  REQUEST_CHANGE_USER_DETAILS_SUCCESS,
} from '@constants/ActionTypes';
import { APP_USER_INITIAL_STATE, USERS_INITIAL_STATE } from '@constants/initialState';

const usersReducer = (state = USERS_INITIAL_STATE, action: UsersActionType) => {
  const { type, user } = action;

  switch (type) {
    case FETCH_USER_DETAILS:
    case REQUEST_CHANGE_USER_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_DETAILS_SUCCESS:
    case FETCH_USER_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        user: user || APP_USER_INITIAL_STATE,
      };

    case REQUEST_CHANGE_USER_DETAILS_SUCCESS:
    case REQUEST_CHANGE_USER_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
