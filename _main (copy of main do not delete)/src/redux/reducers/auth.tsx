import { AUTH_INITIAL_STATE } from '~constants/initialState'
import { LOCAL_STORAGE_DATA_KEY } from '~constants/keys'
import { deleteValueFromLocalStorage, setValueToLocalStorage } from '~utils'
import { AuthActionType, AuthStateType } from '~types'
import {
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGOUT,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REQUEST_CHANGE_USER_PASSWORD,
  REQUEST_CHANGE_USER_PASSWORD_ERROR,
  REQUEST_CHANGE_USER_PASSWORD_SUCCESS,
  REQUEST_PASSWORD_RECOVERY,
  REQUEST_PASSWORD_RECOVERY_ERROR,
  REQUEST_PASSWORD_RECOVERY_SUCCESS,
  USER_LOGIN_ERROR,
  VALIDATE_EMAIL_IN_DB_ERROR,
  VALIDATE_EMAIL_IN_DB_SUCCESS,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_ERROR,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_SUCCESS,
} from '~constants/ActionTypes'

const authReducer = (state: AuthStateType = AUTH_INITIAL_STATE, action: AuthActionType) => {
  const { type, userLogin } = action

  switch (type) {
    case LOGIN_USER:
    case REGISTER_USER:
    case REQUEST_PASSWORD_RECOVERY:
    case REQUEST_CHANGE_USER_PASSWORD:
      return {
        ...state,
        isLoading: true,
      }
    case REGISTER_USER_SUCCESS:
    case REQUEST_PASSWORD_RECOVERY_SUCCESS:
    case REQUEST_PASSWORD_RECOVERY_ERROR:
    case REQUEST_CHANGE_USER_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    case REQUEST_CHANGE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        redirect: true,
      }
    case LOGIN_SUCCESS:
      userLogin && setValueToLocalStorage(LOCAL_STORAGE_DATA_KEY, userLogin)
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userLogin,
      }
    case USER_LOGIN_ERROR:
    case REGISTER_USER_ERROR:
    case LOGOUT:
      deleteValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY)
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        userLogin: null,
      }
    case VALIDATE_EMAIL_IN_DB_SUCCESS:
      return {
        ...state,
        isEmailValidated: true,
      }
    case VALIDATE_EMAIL_IN_DB_ERROR:
      return {
        ...state,
        isEmailValidated: false,
      }
    case VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_SUCCESS:
      return {
        ...state,
        isTokenForPasswordValidated: true,
      }
    case VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_ERROR:
      return {
        ...state,
        isTokenForPasswordValidated: false,
      }
    default:
      return state
  }
}

export default authReducer
