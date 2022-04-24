import { call, put, takeEvery } from 'redux-saga/effects'
import { createCheckoutSession } from '@redux/actionCreators'
import { CREATE_CHECKOUT_SESSION } from '@redux/actionTypes'

const API_URL = '/api/checkout_session/'

function* checkoutSession() {
  const response = yield call(fetch, API_URL)
  const session = yield response.json()
  yield put(createCheckoutSession(session))
}

function* checkoutSaga() {
  yield takeEvery(CREATE_CHECKOUT_SESSION, checkoutSession)
}

export default checkoutSaga
