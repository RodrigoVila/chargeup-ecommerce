//@ts-nocheck
// Planning to move out of sagas so is not worth investing time typing them
import { call, put, takeEvery } from 'redux-saga/effects'

import {
  createNewCheckoutSessionError,
  createNewCheckoutSessionSuccess,
} from '~redux/actions/checkout'
import { CREATE_CHECKOUT_SESSION } from '~constants/ActionTypes'

const API_URL = '/api/checkout-session'

function* checkoutSession(payload: any) {
  const { newOrder } = payload
  try {
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      body: JSON.stringify(newOrder),
    })
    const { url } = yield response.json()
    yield put(createNewCheckoutSessionSuccess(url))
  } catch (e: any) {
    console.error('Session Error', e)
    yield put(createNewCheckoutSessionError(e))
  }
}
function* checkoutSaga() {
  yield takeEvery(CREATE_CHECKOUT_SESSION, checkoutSession)
}

export default checkoutSaga
