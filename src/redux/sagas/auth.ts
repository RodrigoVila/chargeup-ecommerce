import { call, put, takeEvery } from 'redux-saga/effects';
import {
  successRegisterUser,
  errorRegisterUser,
  errorLoginUser,
  successLoginUser,
  loginModalClose,
  logoutUser,
  displayMessageSuccess,
  displayMessageError,
} from '@redux/actions';
import {
  REGISTER_USER,
  LOGIN_USER,
  CHECK_USER_TOKEN,
  FETCH_USER_DETAILS,
} from '@redux/actions/types';
import { lang, LOCAL_STORAGE_DATA_KEY } from '@constants';
import { fetchUserDetailsError, fetchUserDetailsSuccess } from '@redux/actions/auth';
import { getValueFromLocalStorage } from '@utils/localStorage';

const API_URL = '/api/auth';

function* userRegister(payload: any) {
  try {
    const response = yield call(fetch, API_URL + '/signup', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload.user),
    });

    const { success } = yield response.json();

    if (success) {
      yield put(successRegisterUser());
      yield put(displayMessageSuccess(lang.es.USER_REGISTER_SUCCESS));
      yield put(loginModalClose());
    } else {
      yield put(errorRegisterUser());
    }
  } catch (e) {
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
    console.log('HOLA', e);
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

function* fetchUserDetails() {
  const { email, token } = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY);

  try {
    const response = yield call(fetch, API_URL + '/getuser', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, token }),
    });

    const { success, user: userResponse } = yield response.json();
    if (success) {
      yield put(fetchUserDetailsSuccess(userResponse));
    } else {
      yield put(fetchUserDetailsError());
    }
  } catch (e) {
    yield put(fetchUserDetailsError());
  }
}

function* authSaga() {
  yield takeEvery(REGISTER_USER, userRegister);
  yield takeEvery(LOGIN_USER, userLogin);
  yield takeEvery(CHECK_USER_TOKEN, checkToken);
  yield takeEvery(FETCH_USER_DETAILS, fetchUserDetails);
}

export default authSaga;
