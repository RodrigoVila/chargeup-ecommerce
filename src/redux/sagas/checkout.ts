import { call, put, takeEvery } from 'redux-saga/effects'
import { createNewCheckoutSessionSuccess } from '@redux/actions/checkout'
import { CREATE_CHECKOUT_SESSION } from '@redux/actions/types'

const API_URL = '/api/checkout_session'

function* checkoutSession() {
  const response = yield call(fetch, API_URL, {
    method: 'POST',
    redirect: 'follow',
  })

  yield put(createNewCheckoutSessionSuccess(response.url))
}

function* checkoutSaga() {
  yield takeEvery(CREATE_CHECKOUT_SESSION, checkoutSession)
}

export default checkoutSaga
