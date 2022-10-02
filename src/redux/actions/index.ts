import {
  addProductToStore,
  removeProductFromStore,
  fetchProductsFromStore,
  fetchProductsFromStoreSuccess,
} from './products';
import {
  setAuthLoading,
  userTokenCheck,
  loginUser,
  successLoginUser,
  errorLoginUser,
  logoutUser,
  registerNewUser,
  successRegisterUser,
  errorRegisterUser,
} from './auth';
import {
  loadCartState,
  addToCartState,
  removeFromCartState,
  changeProductQuantityState,
} from './cart';
import { createNewCheckoutSession, createNewCheckoutSessionSuccess } from './checkout';
import {
  displayMessageSuccess,
  displayMessageError,
  displayMessageInfo,
} from './toastNotifications';

import {
  cartModalOpen,
  cartModalClose,
  checkoutModalOpen,
  checkoutModalClose,
  checkoutSuccessModalOpen,
  checkoutSuccessModalClose,
  checkoutErrorModalOpen,
  checkoutErrorModalClose,
  drawerModalOpen,
  drawerModalClose,
  filtersModalOpen,
  filtersModalClose,
  loginModalOpen,
  loginModalClose,
  productModalOpen,
  productModalClose,
} from './modal';

import { setFilters } from './filters';

import {
  fetchUserDetails,
  fetchUserDetailsError,
  fetchUserDetailsSuccess,
  setUserDataLoading,
} from './users';

export {
  addProductToStore,
  removeProductFromStore,
  fetchProductsFromStore,
  fetchProductsFromStoreSuccess,
  setAuthLoading,
  userTokenCheck,
  loginUser,
  successLoginUser,
  errorLoginUser,
  logoutUser,
  registerNewUser,
  successRegisterUser,
  errorRegisterUser,
  loadCartState,
  addToCartState,
  removeFromCartState,
  changeProductQuantityState,
  displayMessageSuccess,
  displayMessageError,
  displayMessageInfo,
  createNewCheckoutSession,
  createNewCheckoutSessionSuccess,
  cartModalOpen,
  cartModalClose,
  checkoutModalOpen,
  checkoutModalClose,
  checkoutSuccessModalOpen,
  checkoutSuccessModalClose,
  checkoutErrorModalOpen,
  checkoutErrorModalClose,
  drawerModalOpen,
  drawerModalClose,
  filtersModalOpen,
  filtersModalClose,
  loginModalOpen,
  loginModalClose,
  productModalOpen,
  productModalClose,
  setFilters,
  fetchUserDetails,
  fetchUserDetailsError,
  fetchUserDetailsSuccess,
  setUserDataLoading,
};
