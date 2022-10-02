import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_USER_DETAILS } from '@redux/actions/types';
import { fetchUserDetailsError, fetchUserDetailsSuccess } from '@redux/actions';

import { getValueFromLocalStorage } from '@utils/localStorage';
import { LOCAL_STORAGE_DATA_KEY } from '@constants';

const API_URL = '/api/users/getUserDetails';

function* fetchUserDetails() {
  const { email, token } = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY);

  try {
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, token }),
    });
    const { success, user } = yield response.json();

    if (success) {
      yield put(fetchUserDetailsSuccess(user));
    } else {
      yield put(fetchUserDetailsError());
    }
  } catch (e) {
    yield put(fetchUserDetailsError());
  }
}

function* usersSaga() {
  yield takeEvery(FETCH_USER_DETAILS, fetchUserDetails);
}

export default usersSaga;
