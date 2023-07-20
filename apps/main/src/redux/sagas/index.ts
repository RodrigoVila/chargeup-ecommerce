import { all } from 'redux-saga/effects';

import authSaga from './auth';
import checkoutSaga from './checkout';
import productsSaga from './products';
import usersSaga from './users';

function* rootSaga() {
  yield all([productsSaga(), checkoutSaga(), authSaga(), usersSaga() /*, otherSagas()*/]);
}

export default rootSaga;
