import { all } from 'redux-saga/effects';
import productsSaga from './products';
import checkoutSaga from './checkout';
import authSaga from './auth';

function* rootSaga() {
  yield all([productsSaga(), checkoutSaga(), authSaga() /*, otherSagas()*/]);
}

export default rootSaga;
