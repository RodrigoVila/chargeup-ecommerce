import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS,
} from './types'

export const addProduct = (product: ProductType) => ({
  type: ADD_PRODUCT,
  payload: product,
})

export const removeProduct = (product: ProductType) => ({
  type: DELETE_PRODUCT,
  payload: product,
})

export const fetchProductsSuccess = (products: ProductType[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
})

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
})
