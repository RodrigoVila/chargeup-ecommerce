import { useDispatch } from 'react-redux'

import type { AppDispatch } from '~redux/store'

import {
  changeUserPassword,
  googleUserData,
  loginUser,
  logoutUser,
  registerNewUser,
  requestPasswordRecovery,
  successLoginUser,
  userTokenCheck,
  validateEmailInDB,
  validateTokenForPassChange,
} from '~redux/actions/auth'
import {
  addToCartState,
  changeProductQuantityState,
  clearCartItems,
  loadCartState,
  removeFromCartState,
} from '~redux/actions/cart'
import { createNewCheckoutSession } from '~redux/actions/checkout'
import {
  addProductToStore,
  fetchProductsFromStore,
  fetchProductsFromStoreSuccess,
  removeProductFromStore,
} from '~redux/actions/products'
import {
  displayMessageError,
  displayMessageInfo,
  displayMessageSuccess,
} from '~redux/actions/toastNotifications'

import { addNewOrder } from '~redux/actions/order'
import { changeUserDetails, fetchUserDetails, userDetailsClear } from '~redux/actions/user'
import { contactFormSend } from '~redux/actions/email'
import {
  CartProductType,
  ContactFormType,
  GoogleSignInSuccessResponse,
  OrderType,
  ProductType,
  StorageUserType,
  UserDetailsType,
  UserLoginType,
  UserRegisterType,
} from '@packages/types'
import { useIntl } from 'react-intl'

export const useAppActions = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { formatMessage } = useIntl()

  // Auth
  const checkUserToken = (user: UserLoginType) => dispatch(userTokenCheck(user))

  const getGoogleUserData = (payload: GoogleSignInSuccessResponse) =>
    dispatch(googleUserData(payload, formatMessage))

  const userLogin = (user: UserLoginType) => dispatch(loginUser(user, formatMessage))

  const userLoginSuccess = (user: StorageUserType) => successLoginUser(user)

  const userLogout = () => dispatch(logoutUser())

  const registerUser = (user: UserRegisterType) => dispatch(registerNewUser(user, formatMessage))

  const dBEmailValidation = (pid: string) => dispatch(validateEmailInDB(pid))

  const validateTokenForPasswordChange = (email: string, pid: string) =>
    dispatch(validateTokenForPassChange(email, pid))

  const recoverUserPassword = (email: string) =>
    dispatch(requestPasswordRecovery(email, formatMessage))

  const editUserPassword = (
    email: string,
    newPassword: string,
    oldPassword?: string | undefined,
  ) => {
    dispatch(changeUserPassword(email, newPassword, formatMessage, oldPassword))
  }

  // Cart
  const loadCart = (products: CartProductType[]) => dispatch(loadCartState(products))

  const addToCart = (product: CartProductType) => dispatch(addToCartState(product))

  const removeFromCart = (id: string) => dispatch(removeFromCartState(id))

  const clearCart = () => dispatch(clearCartItems())

  // Checkout
  const createCheckoutSession = (newOrder: OrderType) =>
    dispatch(createNewCheckoutSession(newOrder))

  const changeCartProductQuantity = (id: string, newAmount: number) =>
    dispatch(changeProductQuantityState(id, newAmount))

  // Messages
  const displaySuccessMessage = (msg: string, duration?: number) =>
    dispatch(displayMessageSuccess(msg, duration))

  const displayErrorMessage = (msg: string, duration?: number) =>
    dispatch(displayMessageError(msg, duration))

  const displayInfoMessage = (msg: string, duration?: number) =>
    dispatch(displayMessageInfo(msg, duration))

  // Orders

  const addOrder = (order: OrderType) => dispatch(addNewOrder(order))

  // Products

  const addProduct = (product: ProductType) => dispatch(addProductToStore(product))

  const removeProduct = (id: string) => dispatch(removeProductFromStore(id))

  const fetchProducts = () => dispatch(fetchProductsFromStore())

  const fetchProductsSuccess = (products: ProductType[]) =>
    dispatch(fetchProductsFromStoreSuccess(products))

  //Users
  const getUserDetails = () => dispatch(fetchUserDetails())

  const editUserDetails = async (user: UserDetailsType) =>
    await dispatch(changeUserDetails(user, formatMessage))

  const sendContactForm = (contacForm: ContactFormType) =>
    dispatch(contactFormSend(contacForm, formatMessage))

  const clearUserDetails = () => dispatch(userDetailsClear())

  return {
    addProduct,
    removeProduct,
    fetchProducts,
    fetchProductsSuccess,
    checkUserToken,
    getGoogleUserData,
    userLogin,
    userLoginSuccess,
    userLogout,
    registerUser,
    dBEmailValidation,
    validateTokenForPasswordChange,
    recoverUserPassword,
    loadCart,
    addToCart,
    removeFromCart,
    changeCartProductQuantity,
    clearCart,
    displaySuccessMessage,
    displayErrorMessage,
    displayInfoMessage,
    createCheckoutSession,
    addOrder,
    getUserDetails,
    editUserDetails,
    editUserPassword,
    sendContactForm,
    clearUserDetails,
  }
}
