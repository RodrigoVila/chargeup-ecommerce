import { call, put, takeEvery } from 'redux-saga/effects';
import {
  successRegisterUser,
  errorRegisterUser,
  errorLoginUser,
  successLoginUser,
} from '@redux/actions';
import { REGISTER_USER, LOGIN_USER } from '@redux/actions/types';

const API_URL = '/api/auth';

function* userRegister(payload: any) {
  try {
    const response = yield call(fetch, API_URL + '/signup', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload.user),
    });

    const user = yield response.json();

    user.success ? yield put(successRegisterUser(user)) : yield put(errorRegisterUser());
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

    const user = yield response.json();
    user.success ? yield put(successLoginUser(user)) : yield put(errorLoginUser());
  } catch (e) {
    yield put(errorLoginUser());
  }
}

function* authSaga() {
  yield takeEvery(REGISTER_USER, userRegister);
  yield takeEvery(LOGIN_USER, userLogin);
}

export default authSaga;
