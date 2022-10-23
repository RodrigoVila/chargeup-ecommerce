import { LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_PRODUCT_QUANTITY } from './types'

export const loadCartState = (products: ProductType[]) => ({
  type: LOAD_CART,
  products,
})

export const addToCartState = (product: ProductType) => ({
  type: ADD_TO_CART,
  product,
})

export const removeFromCartState = (id: string) => ({
  type: REMOVE_FROM_CART,
  id,
})

export const changeProductQuantityState = (id:string, newAmount:number) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  id,
  newAmount,
})
