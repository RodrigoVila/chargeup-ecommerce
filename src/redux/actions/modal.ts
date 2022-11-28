import {
  OPEN_CART_MODAL,
  CLOSE_CART_MODAL,
  OPEN_CHECKOUT_MODAL,
  CLOSE_CHECKOUT_MODAL,
  OPEN_CHECKOUT_MODAL_SUCCESS,
  CLOSE_OPEN_CHECKOUT_MODAL_SUCCESS,
  OPEN_CHECKOUT_MODAL_ERROR,
  CLOSE_CHECKOUT_MODAL_ERROR,
  OPEN_DRAWER_MODAL,
  CLOSE_DRAWER_MODAL,
  OPEN_FILTERS_MODAL,
  CLOSE_FILTERS_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  OPEN_PRODUCT_DETAILS_MODAL,
  CLOSE_PRODUCT_DETAILS_MODAL,
  OPEN_USER_MODAL,
  CLOSE_USER_MODAL,
  OPEN_PRODUCT_EXTRAS_MODAL,
  CLOSE_PRODUCT_EXTRAS_MODAL,
  OPEN_ADMIN_PRODUCT_MODAL,
  CLOSE_ADMIN_PRODUCT_MODAL,
} from './types';

// ADMIN
export const adminProductModalOpen = (selectedProduct:ProductType) => ({ type: OPEN_ADMIN_PRODUCT_MODAL, selectedProduct });
export const adminProductModalClose = () => ({ type: CLOSE_ADMIN_PRODUCT_MODAL });

// USER
export const cartModalOpen = () => ({ type: OPEN_CART_MODAL });
export const cartModalClose = () => ({ type: CLOSE_CART_MODAL });
export const checkoutModalOpen = () => ({ type: OPEN_CHECKOUT_MODAL });
export const checkoutModalClose = () => ({ type: CLOSE_CHECKOUT_MODAL });
export const checkoutSuccessModalOpen = () => ({ type: OPEN_CHECKOUT_MODAL_SUCCESS });
export const checkoutSuccessModalClose = () => ({ type: CLOSE_OPEN_CHECKOUT_MODAL_SUCCESS });
export const checkoutErrorModalOpen = () => ({ type: OPEN_CHECKOUT_MODAL_ERROR });
export const checkoutErrorModalClose = () => ({ type: CLOSE_CHECKOUT_MODAL_ERROR });
export const drawerModalOpen = () => ({ type: OPEN_DRAWER_MODAL });
export const drawerModalClose = () => ({ type: CLOSE_DRAWER_MODAL });
export const filtersModalOpen = () => ({ type: OPEN_FILTERS_MODAL });
export const filtersModalClose = () => ({ type: CLOSE_FILTERS_MODAL });
export const loginModalOpen = () => ({ type: OPEN_LOGIN_MODAL });
export const loginModalClose = () => ({ type: CLOSE_LOGIN_MODAL });
export const productModalOpen = (selectedProduct: ProductType) => ({
  type: OPEN_PRODUCT_DETAILS_MODAL,
  selectedProduct,
});
export const productModalClose = () => ({ type: CLOSE_PRODUCT_DETAILS_MODAL });
export const productExtrasModalOpen = (extraItems: any) => ({
  type: OPEN_PRODUCT_EXTRAS_MODAL,
  extraItems,
});
export const productExtrasModalClose = () => ({ type: CLOSE_PRODUCT_EXTRAS_MODAL });
export const userModalOpen = () => ({ type: OPEN_USER_MODAL });
export const userModalClose = () => ({ type: CLOSE_USER_MODAL });
