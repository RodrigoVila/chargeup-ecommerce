import { call, put, takeEvery } from 'redux-saga/effects'
import { createCheckoutSessionSuccess } from '@redux/actionCreators'
import { CREATE_CHECKOUT_SESSION } from '@redux/actionTypes'

const API_URL = '/api/checkout_session'

function* checkoutSession() {
  const response = yield call(fetch, API_URL, {
    method: 'POST',
    redirect: 'follow',
  })

  yield put(createCheckoutSessionSuccess(response.url))
}

function* checkoutSaga() {
  yield takeEvery(CREATE_CHECKOUT_SESSION, checkoutSession)
}

export default checkoutSaga
