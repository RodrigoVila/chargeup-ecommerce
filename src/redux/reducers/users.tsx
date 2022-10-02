import { APP_USER_INITIAL_STATE, USERS_INITIAL_STATE } from '@constants';
import { FETCH_USER_DETAILS_ERROR, FETCH_USER_DETAILS_SUCCESS } from '../actions/types';

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
    default:
      return state;
  }
};

export default usersReducer;
