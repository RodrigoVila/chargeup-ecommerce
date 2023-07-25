import { all } from 'redux-saga/effects';

import authSaga from './auth';
import checkoutSaga from './checkout';
import productsSaga from './products';
import userSaga from './user';

function* rootSaga() {
  yield all([productsSaga(), checkoutSaga(), authSaga(), userSaga() /*, otherSagas()*/]);
}

export default rootSaga;
