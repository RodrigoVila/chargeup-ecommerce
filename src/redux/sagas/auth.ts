import { call, put, takeEvery } from 'redux-saga/effects';
import { successRegisterUser, displayMessageSuccess, displayMessageError } from '@redux/actions';
import { REGISTER_USER, LOGIN_USER } from '@redux/actions/types';

const API_URL = '/api/auth';

function* userRegister(payload: any) {
  console.log(payload);
  try {
    const response = yield call(fetch, API_URL + '/signup', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload.user),
    });

    const user = yield response.json();

    if (user.success) {
      yield put(displayMessageSuccess(user.message));
      yield put(successRegisterUser(user));
    } else {
      yield put(displayMessageError(user.message));
    }
  } catch (e) {
    console.log('REGISTER ERROR: ', e);
    yield put(displayMessageError(e.message));
  }
}

function* userLogin(payload: any) {
  const { email, password, token } = payload;
  try {
    const response = yield call(fetch, API_URL + '/signin', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, token }),
    });

    const user = yield response.json();
    if (user.success) {
      yield put(displayMessageSuccess(user.message));
      yield put(successRegisterUser(user));
    } else {
      yield put(displayMessageError(user.message));
    }
  } catch (e) {
    console.log('REGISTER ERROR: ', e);
    yield put(displayMessageError(e.message));
  }
}

function* authSaga() {
  yield takeEvery(REGISTER_USER, userRegister);
  yield takeEvery(LOGIN_USER, userLogin);
}

export default authSaga;
