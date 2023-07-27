import {
  GoogleSignInSuccessResponse,
  StorageUserType,
  UserLoginType,
  UserRegisterType,
} from '~types'
import {
  CHECK_USER_TOKEN,
  USER_LOGIN_SUCCESS,
  LOGIN_USER,
  LOGIN_WITH_GOOGLE,
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
  VALIDATE_EMAIL_IN_DB,
  VALIDATE_EMAIL_IN_DB_ERROR,
  VALIDATE_EMAIL_IN_DB_SUCCESS,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_ERROR,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_SUCCESS,
} from '~constants/ActionTypes'
import { IntlFormatters } from 'react-intl'

export const userTokenCheck = (user: UserLoginType) => ({
  type: CHECK_USER_TOKEN,
  user,
})

export const googleUserData = (
  response: GoogleSignInSuccessResponse,
  formatMessage: IntlFormatters['formatMessage'],
) => ({
  type: LOGIN_WITH_GOOGLE,
  response,
  formatMessage,
})

export const loginUser = (user: UserLoginType, formatMessage: IntlFormatters['formatMessage']) => ({
  type: LOGIN_USER,
  user,
  formatMessage,
})

export const successLoginUser = (userLogin: StorageUserType) => ({
  type: USER_LOGIN_SUCCESS,
  userLogin,
})

export const errorLoginUser = () => ({
  type: USER_LOGIN_ERROR,
})

export const logoutUser = () => ({ type: LOGOUT })

export const registerNewUser = (
  user: UserRegisterType,
  formatMessage: IntlFormatters['formatMessage'],
) => ({
  type: REGISTER_USER,
  user,
  formatMessage,
})

export const successRegisterUser = () => ({
  type: REGISTER_USER_SUCCESS,
})

export const errorRegisterUser = () => ({
  type: REGISTER_USER_ERROR,
})

export const validateEmailInDB = (pid: string) => ({
  type: VALIDATE_EMAIL_IN_DB,
  pid,
})

export const validateEmailInDBSuccess = () => ({
  type: VALIDATE_EMAIL_IN_DB_SUCCESS,
})

export const validateEmailInDBError = () => ({
  type: VALIDATE_EMAIL_IN_DB_ERROR,
})

export const requestPasswordRecovery = (
  email: string,
  formatMessage: IntlFormatters['formatMessage'],
) => ({
  type: REQUEST_PASSWORD_RECOVERY,
  email,
  formatMessage,
})

export const requestPasswordRecoverySuccess = () => ({
  type: REQUEST_PASSWORD_RECOVERY_SUCCESS,
})

export const requestPasswordRecoveryError = () => ({
  type: REQUEST_PASSWORD_RECOVERY_ERROR,
})

export const validateTokenForPassChange = (email: string, token: string) => ({
  type: VALIDATE_TOKEN_FOR_PASSWORD_CHANGE,
  email,
  token,
})

export const validateTokenForPassChangeSucccess = () => ({
  type: VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_SUCCESS,
})

export const validateTokenForPassChangeError = () => ({
  type: VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_ERROR,
})

export const changeUserPassword = (
  email: string,
  newPassword: string,
  formatMessage: IntlFormatters['formatMessage'],
  oldPassword?: string,
) => ({
  type: REQUEST_CHANGE_USER_PASSWORD,
  email,
  newPassword,
  formatMessage,
  oldPassword,
})

export const changeUserPasswordSuccess = () => ({
  type: REQUEST_CHANGE_USER_PASSWORD_SUCCESS,
})

export const changeUserPasswordError = () => ({
  type: REQUEST_CHANGE_USER_PASSWORD_ERROR,
})
