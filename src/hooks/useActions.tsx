import { useAppDispatch } from '@hooks/index'
import {
  addProductToStore,
  removeProductFromStore,
  fetchProductsFromStore,
  fetchProductsFromStoreSuccess,
} from '@redux/actions/products'
import {
  registerNewUser,
  successRegisterUser,
  errorRegisterUser,
  loginUser,
  logoutUser,
} from '@redux/actions/auth'
import {
  loadCartState,
  addToCartState,
  removeFromCartState,
  changeProductQuantityState,
} from '@redux/actions/cart'
import { createNewCheckoutSession, createNewCheckoutSessionSuccess } from '@redux/actions/checkout'
import {
  displayMessageSuccess,
  displayMessageError,
  displayMessageInfo,
} from '@redux/actions/toastNotifications'

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
} from '@redux/actions/modal'

import { setFilters } from '@redux/actions/filters'

const useActions = () => {
  const dispatch = useAppDispatch()

  // Products
  const addProduct = (product: ProductType) => dispatch(addProductToStore(product))
  const removeProduct = (id: string) => dispatch(removeProductFromStore(id))
  const fetchProducts = () => dispatch(fetchProductsFromStore())
  const fetchProductsSuccess = (products: ProductType[]) =>
    dispatch(fetchProductsFromStoreSuccess(products))

  // Auth
  const registerUser = (user: UserType) => dispatch(registerNewUser(user))
  const registerUserSuccess = (user: UserType) => dispatch(successRegisterUser(user))
  const registerUserError = (error: any) => dispatch(errorRegisterUser(error))
  const userLogin = (username: string, password: string) => dispatch(loginUser(username, password))
  const userLogout = () => dispatch(logoutUser())

  // Cart
  const loadCart = (products: ProductType[]) => dispatch(loadCartState(products))
  const addToCart = (product: ProductType) => dispatch(addToCartState(product))
  const removeFromCart = (id: string) => dispatch(removeFromCartState(id))
  const changeCartProductQuantity = (id: string, newAmount: number) =>
    dispatch(changeProductQuantityState(id, newAmount))

  // Messages
  const displaySuccessMessage = (msg: string) => dispatch(displayMessageSuccess(msg))
  const displayErrorMessage = (msg: string) => dispatch(displayMessageError(msg))
  const displayInfoMessage = (msg: string) => dispatch(displayMessageInfo(msg))

  // Checkout
  const createCheckoutSession = () => dispatch(createNewCheckoutSession())
  const createCheckoutSessionSuccess = (sessionURL: string) =>
    dispatch(createNewCheckoutSessionSuccess(sessionURL))

  // Modals
  const openCartModal = () => dispatch(cartModalOpen())
  const closeCartModal = () => dispatch(cartModalClose())
  const openCheckoutModal = () => dispatch(checkoutModalOpen())
  const closeCheckoutModal = () => dispatch(checkoutModalClose())
  const openCheckoutSuccessModal = () => dispatch(checkoutSuccessModalOpen())
  const closeCheckoutSuccessModal = () => dispatch(checkoutSuccessModalClose())
  const openCheckoutErrorModal = () => dispatch(checkoutErrorModalOpen())
  const closeCheckoutErrorModal = () => dispatch(checkoutErrorModalClose())
  const openDrawerModal = () => dispatch(drawerModalOpen())
  const closeDrawerModal = () => dispatch(drawerModalClose())
  const openFiltersModal = () => dispatch(filtersModalOpen())
  const closeFiltersModal = () => dispatch(filtersModalClose())
  const openProductModal = (selectedProduct: ProductType) =>
    dispatch(productModalOpen(selectedProduct))
  const closeProductModal = () => dispatch(productModalClose())

  // filters
  const setProductFilters = (filter: string) => dispatch(setFilters(filter))

  return {
    addProduct,
    removeProduct,
    fetchProducts,
    fetchProductsSuccess,
    registerUser,
    registerUserSuccess,
    registerUserError,
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
    createCheckoutSessionSuccess,
    openCartModal,
    closeCartModal,
    openCheckoutModal,
    closeCheckoutModal,
    openCheckoutSuccessModal,
    closeCheckoutSuccessModal,
    openCheckoutErrorModal,
    closeCheckoutErrorModal,
    openDrawerModal,
    closeDrawerModal,
    openFiltersModal,
    closeFiltersModal,
    openProductModal,
    closeProductModal,
    setProductFilters
  }
}

export default useActions
