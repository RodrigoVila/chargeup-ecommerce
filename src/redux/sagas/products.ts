import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchProductsFromStoreSuccess } from '@redux/actions/products'
import { FETCH_PRODUCTS } from '@redux/actions/types'

const API_URL = '/api/products'

function* fetchProducts() {
  const response = yield call(fetch, API_URL)
  const products = yield response.json()
  yield put(fetchProductsFromStoreSuccess(products))
}

function* productsSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts)
}

export default productsSaga
