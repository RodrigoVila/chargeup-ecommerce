import { all } from 'redux-saga/effects'
import productsSaga from './products'
import checkoutSaga from './checkout'

function* rootSaga() {
  yield all([productsSaga(), checkoutSaga() /*, otherSagas()*/])
}

export default rootSaga
