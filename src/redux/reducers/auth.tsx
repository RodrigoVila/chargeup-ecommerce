import {
  AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from '../actions/types';

const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('cub_user'));

const initialState = user
  ? { isLoggedIn: true, isAuthLoading: false, user }
  : { isLoggedIn: false, isAuthLoading: false, user: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  // REGISTER_USER & LOGIN_USER reducers only handles loading state. Api calls are handled with Sagas.
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: action.isAuthLoading,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isAuthLoading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isAuthLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isAuthLoading: false,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isAuthLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
