import {
  LOAD_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
} from '../actionTypes'

export const loadCart = (products: ProductType[]) => ({
  type: LOAD_CART,
  products,
})

export const addToCart = (product: ProductType) => ({
  type: ADD_TO_CART,
  product,
})

export const removeFromCart = (product: ProductType) => ({
  type: REMOVE_FROM_CART,
  product,
})

export const changeCartProductQuantity = (product: ProductType) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  product,
})
