import { TFunction } from 'i18next';
import {
  GoogleSignInSuccessResponse,
  StorageUserType,
  UserLoginType,
  UserRegisterType,
} from 'types';
import {
  CHECK_USER_TOKEN,
  LOGIN_SUCCESS,
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
} from '../../constants/ActionTypes';

export const userTokenCheck = (user: UserLoginType, t: TFunction<'translation', undefined>) => ({
  type: CHECK_USER_TOKEN,
  user,
  t,
});

export const googleUserData = (
  response: GoogleSignInSuccessResponse,
  t: TFunction<'translation', undefined>
) => ({
  type: LOGIN_WITH_GOOGLE,
  response,
  t,
});

export const loginUser = (user: UserLoginType, t: TFunction<'translation', undefined>) => ({
  type: LOGIN_USER,
  user,
  t,
});

export const successLoginUser = (userLogin: StorageUserType) => ({
  type: LOGIN_SUCCESS,
  userLogin,
});

export const errorLoginUser = () => ({
  type: USER_LOGIN_ERROR,
});

export const logoutUser = () => ({ type: LOGOUT });

export const registerNewUser = (
  user: UserRegisterType,
  t: TFunction<'translation', undefined>
) => ({
  type: REGISTER_USER,
  user,
  t,
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

export const requestPasswordRecovery = (email: string, t: TFunction<'translation', undefined>) => ({
  type: REQUEST_PASSWORD_RECOVERY,
  email,
  t,
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

export const changeUserPassword = (
  email: string,
  newPassword: string,
  t: TFunction<'translation', undefined>,
  oldPassword?: string
) => ({
  type: REQUEST_CHANGE_USER_PASSWORD,
  email,
  newPassword,
  t,
  oldPassword,
});

export const changeUserPasswordSuccess = () => ({
  type: REQUEST_CHANGE_USER_PASSWORD_SUCCESS,
});

export const changeUserPasswordError = () => ({
  type: REQUEST_CHANGE_USER_PASSWORD_ERROR,
});
