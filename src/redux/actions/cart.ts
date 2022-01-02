import {
  LOAD_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
} from "./types";

export const loadCart = (articles: ProductType[]) => ({
  type: LOAD_CART,
  articles,
});

export const addToCart = (article: ProductType) => ({
  type: ADD_TO_CART,
  article,
});

export const removeFromCart = (article: ProductType) => ({
  type: REMOVE_FROM_CART,
  article,
});

export const changeCartProductQuantity = (article: ProductType) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  article,
});
