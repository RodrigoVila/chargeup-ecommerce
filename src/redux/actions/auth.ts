import {
  CHECK_USER_TOKEN,
  LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  LOGOUT,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REQUEST_EMAIL_VALIDATION,
  REQUEST_EMAIL_VALIDATION_SUCCESS,
  REQUEST_EMAIL_VALIDATION_ERROR,
  VALIDATE_EMAIL_IN_DB,
  VALIDATE_EMAIL_IN_DB_SUCCESS,
  VALIDATE_EMAIL_IN_DB_ERROR
} from '../../constants/ActionTypes';

export const userTokenCheck = (user: UserLoginType) => ({
  type: CHECK_USER_TOKEN,
  user,
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

export const sendEmailValidationRequest = (name: string,email:string, link: string) => ({
  type: REQUEST_EMAIL_VALIDATION,
  name,
  email,
  link,
});

export const sendEmailValidationRequestSuccess = (validationEmailResponse: any) => ({
  type: REQUEST_EMAIL_VALIDATION_SUCCESS,
  validationEmailResponse,
});

export const sendEmailValidationRequestError = (validationEmailError: Error) => ({
  type: REQUEST_EMAIL_VALIDATION_ERROR,
  validationEmailError,
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
