import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types'

const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('cub_user'))

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      }
    case REGISTER_USER_FAIL:
      
      return {
        ...state,
        isLoggedIn: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    default:
      return state
  }
}

export default authReducer
