import { ProductType } from '~types'
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
} from '~constants/ActionTypes'

export const addProductToStore = (product: ProductType) => ({
  type: ADD_PRODUCT,
  payload: product,
})

export const removeProductFromStore = (id: string) => ({
  type: DELETE_PRODUCT,
  id,
})

export const fetchProductsFromStoreSuccess = (products: ProductType[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
})
export const fetchProductsFromStoreError = (error: string) => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
})

export const fetchProductsFromStore = () => ({ type: FETCH_PRODUCTS })
