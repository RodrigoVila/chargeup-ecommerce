import { all } from 'redux-saga/effects'

import authSaga from './auth'
import checkoutSaga from './checkout'
import emailSaga from './email'
import productsSaga from './products'
import userSaga from './user'

function* rootSaga() {
  yield all([
    authSaga(),
    checkoutSaga(),
    emailSaga(),
    productsSaga(),
    userSaga(),
    /*, otherSagas()*/
  ])
}

export default rootSaga
