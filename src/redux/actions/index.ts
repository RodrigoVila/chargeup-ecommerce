import {
  addProductToStore,
  removeProductFromStore,
  fetchProductsFromStore,
  fetchProductsFromStoreSuccess,
} from './products'
import {
  registerNewUser,
  successRegisterUser,
  errorRegisterUser,
  loginUser,
  successLoginUser,
  errorLoginUser,
  logoutUser,
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
  registerNewUser,
  successRegisterUser,
  errorRegisterUser,
  loginUser,
  successLoginUser,
  errorLoginUser,
  logoutUser,
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
