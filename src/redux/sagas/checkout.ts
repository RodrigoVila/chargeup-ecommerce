import { call, put, takeEvery } from 'redux-saga/effects';
import {
  createNewCheckoutSessionError,
  createNewCheckoutSessionSuccess,
} from '@redux/actions/checkout';
import { CREATE_CHECKOUT_SESSION } from '@redux/actions/types';

const API_URL = '/api/checkout_session';

function* checkoutSession(payload: any) {
  const { items } = payload;
  try {
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      body: JSON.stringify(items)
    });
    const { url } = yield response.json();
    yield put(createNewCheckoutSessionSuccess(url));
  } catch (e) {
    console.error('Session Error', e);
    yield put(createNewCheckoutSessionError(e));
  }
}
function* checkoutSaga() {
  yield takeEvery(CREATE_CHECKOUT_SESSION, checkoutSession);
}

export default checkoutSaga;
