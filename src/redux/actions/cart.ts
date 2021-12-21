import {
  LOAD_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
} from "./types";

export const loadCart = (articles: ArticleType[]) => ({
  type: LOAD_CART,
  articles,
});

export const addToCart = (article: ArticleType) => ({
  type: ADD_TO_CART,
  article,
});

export const removeFromCart = (article: ArticleType) => ({
  type: REMOVE_FROM_CART,
  article,
});

export const changeCartProductQuantity = (article: ArticleType) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  article,
});
