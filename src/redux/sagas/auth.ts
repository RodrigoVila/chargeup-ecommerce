import { call, put, takeEvery } from 'redux-saga/effects';

import {
  successRegisterUser,
  errorRegisterUser,
  errorLoginUser,
  successLoginUser,
  logoutUser,
  validateEmailInDBSuccess,
  validateEmailInDBError,
  requestPasswordRecoverySuccess,
  requestPasswordRecoveryError,
  validateTokenForPassChangeSucccess,
  validateTokenForPassChangeError,
  changeUserPasswordSuccess,
  changeUserPasswordError,
} from '@redux/actions/auth';
import { displayMessageSuccess, displayMessageError } from '@redux/actions/toastNotifications';
import { loginModalClose } from '@redux/actions/modal';
import {
  REGISTER_USER,
  LOGIN_USER,
  CHECK_USER_TOKEN,
  VALIDATE_EMAIL_IN_DB,
  REQUEST_PASSWORD_RECOVERY,
  REQUEST_CHANGE_USER_PASSWORD,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE,
} from 'constants/ActionTypes';
import { lang } from '@constants/lang';
import { changeUserDetailsError } from '@redux/actions/users';

const API_URL = '/api/auth';

function* userRegister(payload: any) {
  const { user } = payload;
  try {
    const response = yield call(fetch, API_URL + '/signup', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const { success, message } = yield response.json();
    if (success) {
      yield put(successRegisterUser());
      yield put(displayMessageSuccess(lang.es.USER_REGISTER_SUCCESS, 7000));
      yield put(loginModalClose());
    } else {
      yield put(errorRegisterUser());
      yield put(displayMessageError(message));
    }
  } catch (e) {
    yield put(displayMessageError(lang.es.USER_EXIST));
    yield put(errorRegisterUser());
  }
}

function* userLogin(payload: any) {
  try {
    const response = yield call(fetch, API_URL + '/signin', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload.user),
    });

    const { success, user } = yield response.json();

    if (success) {
      yield put(successLoginUser(user));
      yield put(displayMessageSuccess(lang.es.USER_LOGIN_SUCCESS));
      yield put(loginModalClose());
    } else {
      yield put(displayMessageError(lang.es.INVALID_CREDENTIALS));
      yield put(errorLoginUser());
    }
  } catch (e) {
    yield put(displayMessageError(lang.es.USER_LOGIN_ERROR));
    yield put(errorLoginUser());
  }
}

function* checkToken(payload: any) {
  const { user } = payload;
  const { email, token } = user;

  try {
    const response = yield call(fetch, API_URL + '/tokenvalidation', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, token }),
    });

    const { success } = yield response.json();
    if (success) {
      yield put(successLoginUser(user));
    } else {
      yield put(logoutUser());
    }
  } catch (e) {
    yield put(logoutUser());
  }
}

function* validateEmailInDB(payload: any) {
  const { pid } = payload;

  try {
    const response = yield call(fetch, API_URL + '/emailvalidation', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ pid }),
    });

    const { success } = yield response.json();
    if (success) {
      yield put(validateEmailInDBSuccess());
    } else {
      yield put(validateEmailInDBError());
    }
  } catch (e) {
    yield put(validateEmailInDBError());
  }
}

function* requestPasswordRecovery(payload: any) {
  const { email } = payload;
  try {
    const response = yield call(fetch, API_URL + '/pwdrecovery', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const { success } = yield response.json();
    if (success) {
      yield put(displayMessageSuccess(lang.es.REQUEST_PASSWORD, 7000));
      yield put(requestPasswordRecoverySuccess());
      yield put(loginModalClose());
    } else {
      yield put(displayMessageSuccess(lang.es.REQUEST_PASSWORD, 7000));
      yield put(requestPasswordRecoveryError());
      yield put(loginModalClose());
    }
  } catch (e) {
    console.log('errrr', e);
    // yield put(requestPasswordRecoveryError());
  }
}

function* passwordChangeTokenValidation(payload: any) {
  const { email, token } = payload;

  try {
    const response = yield call(fetch, API_URL + '/pwdtokenvalidation', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, token }),
    });
    const { success } = yield response.json();

    if (success) {
      yield put(validateTokenForPassChangeSucccess());
    } else {
      yield put(validateTokenForPassChangeError());
    }
  } catch (e) {
    yield put(validateTokenForPassChangeError());
  }
}

function* updateUserPassword(payload: any) {
  const { email, oldPassword, newPassword } = payload;

  try {
    const response = yield call(fetch, API_URL + '/updatepassword', {
      method: 'PUT',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, oldPassword, newPassword }),
    });
    const { success, message } = yield response.json();

    if (success) {
      yield put(changeUserPasswordSuccess());
      yield put(displayMessageSuccess(`${lang.es.CHANGE_USER_DATA_SUCCESS}. ${lang.es.REDIRECT_TO_MAIN_PAGE}`));
      // yield put(userModalClose());
    } else {
      yield put(changeUserPasswordError());
      if (message === lang.en.PASSWORDS_DONT_MATCH) {
        yield put(displayMessageError(lang.es.PASSWORDS_DONT_MATCH));
      } else {
        yield put(displayMessageError(lang.es.CHANGE_USER_DATA_ERROR));
      }
      // yield put(displayMessageError(lang.es.CHANGE_USER_DATA_ERROR));
    }
  } catch (e) {
    yield put(changeUserPasswordError());
    yield put(displayMessageError(lang.es.CHANGE_USER_DATA_ERROR));
    // yield put(displayMessageError(lang.es.CHANGE_USER_DATA_ERROR));
  }
}

function* authSaga() {
  yield takeEvery(REGISTER_USER, userRegister);
  yield takeEvery(LOGIN_USER, userLogin);
  yield takeEvery(CHECK_USER_TOKEN, checkToken);
  yield takeEvery(VALIDATE_EMAIL_IN_DB, validateEmailInDB);
  yield takeEvery(REQUEST_PASSWORD_RECOVERY, requestPasswordRecovery);
  yield takeEvery(VALIDATE_TOKEN_FOR_PASSWORD_CHANGE, passwordChangeTokenValidation);
  yield takeEvery(REQUEST_CHANGE_USER_PASSWORD, updateUserPassword);
}

export default authSaga;
