import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT,
} from "./types";

export const addProduct = (product: ProductType) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (product: ProductType) => ({
  type: DELETE_PRODUCT,
  payload: product,
});

export const getProducts = (products: ProductType[]) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const getProduct = (products: ProductType) => ({
  type: GET_PRODUCT,
  payload: products,
});
