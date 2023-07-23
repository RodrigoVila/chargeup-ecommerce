//@ts-nocheck
// Planning to move out of sagas so is not worth investing time typing them
import { call, put, takeEvery } from 'redux-saga/effects';

import { displayMessageError, displayMessageSuccess } from '~redux/actions/toastNotifications';
import {
  changeUserDetailsError,
  changeUserDetailsSuccess,
  fetchUserDetailsError,
  fetchUserDetailsSuccess,
} from '~redux/actions/users';
import { FETCH_USER_DETAILS, REQUEST_CHANGE_USER_DETAILS } from '~constants/ActionTypes';
import { LOCAL_STORAGE_DATA_KEY } from '~constants/keys';
import { getValueFromLocalStorage } from '~utils';

const API_USERS = '/api/users';
const API_USER = '/api/user';

function* fetchUserDetails() {
  const { email, token } = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY);

  try {
    const response = yield call(fetch, API_USER, {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, token }),
    });
    const { success, user, message } = yield response.json();

    if (success) {
      yield put(fetchUserDetailsSuccess(user));
    } else {
      yield put(fetchUserDetailsError(message));
    }
  } catch (e:any) {
    yield put(fetchUserDetailsError(e));
  }
}

function* updateUserDetails(payload: any) {
  const { user, t } = payload;
  try {
    const response = yield call(fetch, API_USER, {
      method: 'PUT',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const { success, message } = yield response.json();

    if (success) {
      yield put(changeUserDetailsSuccess());
      yield put(displayMessageSuccess(t('CHANGE_USER_DATA_SUCCESS')));
    } else {
      yield put(changeUserDetailsError(message));
      yield put(displayMessageError(t('CHANGE_USER_DATA_ERROR')));
    }
  } catch (e:any) {
    yield put(changeUserDetailsError(e));
    yield put(displayMessageError(t('CHANGE_USER_DATA_ERROR')));
  }
}

// Future implementation
// function* deleteUser(payload: any) {}

function* usersSaga() {
  yield takeEvery(FETCH_USER_DETAILS, fetchUserDetails);
  yield takeEvery(REQUEST_CHANGE_USER_DETAILS, updateUserDetails);
}

export default usersSaga;
