import { all } from 'redux-saga/effects'
import productsSaga from './products'

function* rootSaga() {
  yield all([productsSaga() /*, otherSagas()*/])
}

export default rootSaga
