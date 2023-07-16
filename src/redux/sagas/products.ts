import {
  fetchProductsFromStoreError,
  fetchProductsFromStoreSuccess,
} from '@redux/actions/products';
import { FETCH_PRODUCTS } from 'constants/ActionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';

const API_URL = '/api/products';

function* fetchProducts() {
  try {
    const response = yield call(fetch, API_URL);
    const { success, products } = yield response.json();

    if (success) {
      yield put(fetchProductsFromStoreSuccess(products));
    } else {
      yield put(fetchProductsFromStoreError('fetch product error'));
    }
  } catch (e) {
    yield put(fetchProductsFromStoreError(e.message));
  }
}

function* productsSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}

export default productsSaga;
