//@ts-nocheck
// Planning to move out of sagas so is not worth investing time typing them
import { addNewOrderError, addNewOrderSuccess } from '~redux/actions/order';
import { NEW_ORDER } from '~constants/ActionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';

const API_URL = '/api/order';

function* newOrder(payload: any) {
  const { order } = payload;
  try {
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      body: JSON.stringify(order),
    });

    const { success, order: responseOrder, message } = yield response.json();

    if (success) {
      yield put(addNewOrderSuccess(responseOrder));
    } else {
      yield put(addNewOrderError(message));
    }
  } catch (e:any) {
    yield put(addNewOrderError(e.message));
    // console.error('Session Error', e);
    // yield put(createNewnewOrderError(e));
  }
}
function* checkoutSaga() {
  yield takeEvery(NEW_ORDER, newOrder);
}

export default checkoutSaga;
