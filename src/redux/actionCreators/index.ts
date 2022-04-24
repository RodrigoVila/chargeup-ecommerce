import {
  addProduct,
  removeProduct,
  fetchProducts,
  fetchProductsSuccess,
} from './products'
import { userRegister, userLogin, userLogout } from './auth'
import {
  loadCart,
  addToCart,
  removeFromCart,
  changeCartProductQuantity,
} from './cart'
import { createCheckoutSession } from './checkout'
import {
  displaySuccessMessage,
  displayErrorMessage,
  displayInfoMessage,
} from './toastNotifications'

import {
  openCartModal,
  closeCartModal,
  openDrawerModal,
  closeDrawerRModal,
  openCheckoutModal,
  closeCheckoutModal,
  openCheckoutSuccessModal,
  closeCheckoutSuccessModal,
  openCheckoutErrorModal,
  closeCheckoutErrorModal,
} from './modal'

export {
  addProduct,
  removeProduct,
  fetchProducts,
  fetchProductsSuccess,
  userRegister,
  userLogin,
  userLogout,
  loadCart,
  addToCart,
  removeFromCart,
  changeCartProductQuantity,
  displaySuccessMessage,
  displayErrorMessage,
  displayInfoMessage,
  createCheckoutSession,
  openCartModal,
  closeCartModal,
  openDrawerModal,
  closeDrawerRModal,
  openCheckoutModal,
  closeCheckoutModal,
  openCheckoutSuccessModal,
  closeCheckoutSuccessModal,
  openCheckoutErrorModal,
  closeCheckoutErrorModal,
}
