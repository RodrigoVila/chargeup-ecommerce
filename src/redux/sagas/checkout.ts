import { call, put, takeEvery } from 'redux-saga/effects'
import { createCheckoutSessionSuccess } from '@redux/actions'
import { CREATE_CHECKOUT_SESSION } from '@redux/actions/types'

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
