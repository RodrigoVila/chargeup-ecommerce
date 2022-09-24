import {
  addProductToStore,
  removeProductFromStore,
  fetchProductsFromStore,
  fetchProductsFromStoreSuccess,
} from './products'
import {
  setAuthLoading,
  loginUser,
  successLoginUser,
  errorLoginUser,
  logoutUser,
  registerNewUser,
  successRegisterUser,
  errorRegisterUser,
} from './auth'
import {
  loadCartState,
  addToCartState,
  removeFromCartState,
  changeProductQuantityState,
} from './cart'
import { createNewCheckoutSession, createNewCheckoutSessionSuccess } from './checkout'
import {
  displayMessageSuccess,
  displayMessageError,
  displayMessageInfo,
} from './toastNotifications'

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
  productModalOpen,
  productModalClose,
} from './modal'

import { setFilters } from './filters'

export {
  addProductToStore,
  removeProductFromStore,
  fetchProductsFromStore,
  fetchProductsFromStoreSuccess,
  setAuthLoading,
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
  productModalOpen,
  productModalClose,
  setFilters,
}
