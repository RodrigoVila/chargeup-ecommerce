import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_USER_DETAILS,
  REQUEST_CHANGE_USER_DETAILS,
  REQUEST_CHANGE_USER_PASSWORD,
} from 'constants/ActionTypes';
import {
  changeUserDetailsError,
  changeUserDetailsSuccess,
  fetchUserDetailsError,
  fetchUserDetailsSuccess,
} from '@redux/actions/users';
import { userModalClose } from '@redux/actions/modal';
import { displayMessageError, displayMessageSuccess } from '@redux/actions/toastNotifications';

import { getValueFromLocalStorage } from '@utils/localStorage';
import { LOCAL_STORAGE_DATA_KEY } from '@constants/keys';
import { lang } from '@constants/lang';

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
  } catch (e) {
    yield put(fetchUserDetailsError(e));
  }
}

function* updateUserDetails(payload: any) {
  const { user } = payload;
  try {
    const response = yield call(fetch, API_USER, {
      method: 'PUT',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const { success, message } = yield response.json();

    if (success) {
      yield put(changeUserDetailsSuccess());
      yield put(displayMessageSuccess(lang.es.CHANGE_USER_DATA_SUCCESS));
    } else {
      yield put(changeUserDetailsError(message));
      yield put(displayMessageError(lang.es.CHANGE_USER_DATA_ERROR));
    }
  } catch (e) {
    yield put(changeUserDetailsError(e));
    yield put(displayMessageError(lang.es.CHANGE_USER_DATA_ERROR));
  }
}

function* updateUserPassword(payload: any) {
  const { email } = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY);
  const { oldPassword, password } = payload;
  const user = { email, oldPassword, password };
  try {
    const response = yield call(fetch, API_USER + '/updatepassword', {
      method: 'PUT',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const { success, message } = yield response.json();

    if (success) {
      yield put(changeUserDetailsSuccess());
      yield put(displayMessageSuccess(lang.es.CHANGE_USER_DATA_SUCCESS));
      yield put(userModalClose());
    } else {
      yield put(changeUserDetailsError(message));
      yield put(displayMessageError(lang.es.CHANGE_USER_DATA_ERROR));
    }
  } catch (e) {
    yield put(changeUserDetailsError(e));
    yield put(displayMessageError(lang.es.CHANGE_USER_DATA_ERROR));
  }
}
// Future implementation
// function* deleteUser(payload: any) {}

function* usersSaga() {
  yield takeEvery(FETCH_USER_DETAILS, fetchUserDetails);
  yield takeEvery(REQUEST_CHANGE_USER_DETAILS, updateUserDetails);
  yield takeEvery(REQUEST_CHANGE_USER_PASSWORD, updateUserPassword);
}

export default usersSaga;
