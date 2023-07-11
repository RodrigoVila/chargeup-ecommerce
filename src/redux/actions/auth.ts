import { GoogleSignInSuccessResponse, StorageUserType, UserLoginType, UserRegisterType } from 'types';
import {
  CHECK_USER_TOKEN,
  LOGIN_WITH_GOOGLE,
  LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  LOGOUT,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  VALIDATE_EMAIL_IN_DB,
  VALIDATE_EMAIL_IN_DB_SUCCESS,
  VALIDATE_EMAIL_IN_DB_ERROR,
  REQUEST_PASSWORD_RECOVERY,
  REQUEST_PASSWORD_RECOVERY_SUCCESS,
  REQUEST_PASSWORD_RECOVERY_ERROR,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_SUCCESS,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_ERROR,
  REQUEST_CHANGE_USER_PASSWORD,
  REQUEST_CHANGE_USER_PASSWORD_SUCCESS,
  REQUEST_CHANGE_USER_PASSWORD_ERROR,
} from '../../constants/ActionTypes';

export const userTokenCheck = (user: UserLoginType) => ({
  type: CHECK_USER_TOKEN,
  user,
});

export const googleUserData = (response: GoogleSignInSuccessResponse) => ({
  type: LOGIN_WITH_GOOGLE,
  response,
});

export const loginUser = (user: UserLoginType) => ({
  type: LOGIN_USER,
  user,
});

export const successLoginUser = (userLogin: StorageUserType) => ({
  type: LOGIN_SUCCESS,
  userLogin,
});

export const errorLoginUser = () => ({
  type: USER_LOGIN_ERROR,
});

export const logoutUser = () => ({ type: LOGOUT });

export const registerNewUser = (user: UserRegisterType) => ({
  type: REGISTER_USER,
  user,
});

export const successRegisterUser = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const errorRegisterUser = () => ({
  type: REGISTER_USER_ERROR,
});

export const validateEmailInDB = (pid: string) => ({
  type: VALIDATE_EMAIL_IN_DB,
  pid,
});

export const validateEmailInDBSuccess = () => ({
  type: VALIDATE_EMAIL_IN_DB_SUCCESS,
});

export const validateEmailInDBError = () => ({
  type: VALIDATE_EMAIL_IN_DB_ERROR,
});

export const requestPasswordRecovery = (email: string) => ({
  type: REQUEST_PASSWORD_RECOVERY,
  email,
});

export const requestPasswordRecoverySuccess = () => ({
  type: REQUEST_PASSWORD_RECOVERY_SUCCESS,
});

export const requestPasswordRecoveryError = () => ({
  type: REQUEST_PASSWORD_RECOVERY_ERROR,
});

export const validateTokenForPassChange = (email: string, token: string) => ({
  type: VALIDATE_TOKEN_FOR_PASSWORD_CHANGE,
  email,
  token,
});

export const validateTokenForPassChangeSucccess = () => ({
  type: VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_SUCCESS,
});

export const validateTokenForPassChangeError = () => ({
  type: VALIDATE_TOKEN_FOR_PASSWORD_CHANGE_ERROR,
});

export const changeUserPassword = (email:string, newPassword: string, oldPassword?: string | undefined) => ({
  type: REQUEST_CHANGE_USER_PASSWORD,
  email,
  newPassword,
  oldPassword,
});

export const changeUserPasswordSuccess = () => ({
  type: REQUEST_CHANGE_USER_PASSWORD_SUCCESS,
});

export const changeUserPasswordError = () => ({
  type: REQUEST_CHANGE_USER_PASSWORD_ERROR,
});
