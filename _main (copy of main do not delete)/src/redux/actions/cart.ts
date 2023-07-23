import { CartProductType } from '~types';
import {
  ADD_TO_CART,
  CHANGE_PRODUCT_QUANTITY,
  CLEAR_CART,
  LOAD_CART,
  REMOVE_FROM_CART,
} from '~constants/ActionTypes';

export const loadCartState = (products: CartProductType[]) => ({
  type: LOAD_CART,
  products,
});

export const addToCartState = (product: CartProductType) => ({
  type: ADD_TO_CART,
  product,
});

export const removeFromCartState = (id: string) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const changeProductQuantityState = (id: string, newAmount: number) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  id,
  newAmount,
});

export const clearCartItems = () => ({ type: CLEAR_CART });
