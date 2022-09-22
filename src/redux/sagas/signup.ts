import { call, put, takeEvery } from 'redux-saga/effects';
import { successRegisterUser, displayMessageSuccess, displayMessageError } from '@redux/actions';
import { REGISTER_USER } from '@redux/actions/types';

const API_URL = '/api/auth/signup';

function* userRegister(payload: any) {
  try {
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload.userInputs),
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

function* registerSaga() {
  yield takeEvery(REGISTER_USER, userRegister);
}

export default registerSaga;
