import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS } from './types'

export const addProductToStore = (product: ProductType) => ({
  type: ADD_PRODUCT,
  payload: product,
})

export const removeProductFromStore = (product: ProductType) => ({
  type: DELETE_PRODUCT,
  payload: product,
})

export const fetchProductsFromStoreSuccess = (products: ProductType[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
})

export const fetchProductsFromStore = () => ({ type: FETCH_PRODUCTS })
