import { call, put, takeEvery } from 'redux-saga/effects';
import emailjs from '@emailjs/browser';

import {
  successRegisterUser,
  errorRegisterUser,
  errorLoginUser,
  successLoginUser,
  logoutUser,
  sendEmailValidationRequestSuccess,
  sendEmailValidationRequestError,
  sendEmailValidationRequest,
  validateEmailInDBSuccess,
  validateEmailInDBError,
} from '@redux/actions/auth';
import { displayMessageSuccess, displayMessageError } from '@redux/actions/toastNotifications';
import { loginModalClose } from '@redux/actions/modal';
import {
  REGISTER_USER,
  LOGIN_USER,
  CHECK_USER_TOKEN,
  REQUEST_EMAIL_VALIDATION,
  VALIDATE_EMAIL_IN_DB,
} from '@redux/actions/types';
import { lang } from '@constants';

const API_URL = '/api/auth';

function* userRegister(payload: any) {
  const { user } = payload;
  const { pid, name, email } = user;
  try {
    const response = yield call(fetch, API_URL + '/signup', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const { success, message } = yield response.json();
    if (success) {
      const link = `$http://localhost:3000/emailvalidation/${pid}`;

      yield put(successRegisterUser());
      yield put(displayMessageSuccess(lang.es.USER_REGISTER_SUCCESS));
      yield put(sendEmailValidationRequest(name, email, link));
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

function* sendEmailValidation(payload: any) {
  const { name, email, link } = payload;
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const formID = process.env.NEXT_PUBLIC_EMAILJS_ACCOUNT_VERIFICATION_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  try {
    const result = yield emailjs.send(
      serviceID,
      formID,
      { name, email, link }, //Name and message(Link to veritication)
      publicKey
    );
    if (result.status === 200) {
      yield put(sendEmailValidationRequestSuccess(result));
    } else {
      console.log('Validation result. Status !== 200: ', result);
      // yield put(displayMessageInfo('Posible error en validacion. Verificar consola.'));
    }
  } catch (error) {
    yield put(sendEmailValidationRequestError(error));
    yield put(displayMessageError(lang.es.CONTACT_FORM_ERROR));
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
      // Envia yield.put ALGO OK?? ESTA CREADO ESTO?
    } else {
      // Envia yield.put ALGO NO OK?? ESTA CREADO ESTO?
      yield put(validateEmailInDBError());
    }
  } catch (e) {
    yield put(validateEmailInDBError());
    // Envia yield.put ALGO NO OK?? ESTA CREADO ESTO?
  }
}

function* authSaga() {
  yield takeEvery(REGISTER_USER, userRegister);
  yield takeEvery(LOGIN_USER, userLogin);
  yield takeEvery(CHECK_USER_TOKEN, checkToken);
  yield takeEvery(REQUEST_EMAIL_VALIDATION, sendEmailValidation);
  yield takeEvery(VALIDATE_EMAIL_IN_DB, validateEmailInDB);
}

export default authSaga;
