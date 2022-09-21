import { all } from 'redux-saga/effects'
import productsSaga from './products'
import checkoutSaga from './checkout'
import registerSaga from './signup'

function* rootSaga() {
  yield all([productsSaga(), checkoutSaga(), registerSaga() /*, otherSagas()*/])
}

export default rootSaga
