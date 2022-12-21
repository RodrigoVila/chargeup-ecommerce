import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@redux/store';

import {
  addProductToStore,
  removeProductFromStore,
  fetchProductsFromStore,
  fetchProductsFromStoreSuccess,
} from '@redux/actions/products';
import {
  registerNewUser,
  loginUser,
  logoutUser,
  userTokenCheck,
  sendEmailValidationRequest,
  validateEmailInDB,
} from '@redux/actions/auth';
import {
  loadCartState,
  addToCartState,
  removeFromCartState,
  changeProductQuantityState,
  clearCartItems,
} from '@redux/actions/cart';
import { createNewCheckoutSession, createNewCheckoutSessionSuccess } from '@redux/actions/checkout';
import {
  displayMessageSuccess,
  displayMessageError,
  displayMessageInfo,
} from '@redux/actions/toastNotifications';
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
  extrasModalOpen,
  extrasModalClose,
  userModalOpen,
  userModalClose,
  adminProductModalOpen,
  adminProductModalClose,
} from '@redux/actions/modal';

import { setFilters } from '@redux/actions/filters';

import { fetchUserDetails, changeUserDetails, changeUserPassword } from '@redux/actions/users';
import { addNewOrder } from '@redux/actions/order';

const useAppActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Auth
  const checkUserToken = (user: UserLoginType) => dispatch(userTokenCheck(user));

  const userLogin = (user: UserLoginType) => dispatch(loginUser(user));

  const userLogout = () => dispatch(logoutUser());

  const registerUser = (user: UserRegisterType) => dispatch(registerNewUser(user));

  const sendEmailValidation = (name: string, email: string, url: string) =>
    dispatch(sendEmailValidationRequest(name, email, url));

  const dBEmailValidation = (pid: string) => dispatch(validateEmailInDB(pid));

  // Cart
  const loadCart = (products: CartProductType[]) => dispatch(loadCartState(products));

  const addToCart = (product: CartProductType) => dispatch(addToCartState(product));

  const removeFromCart = (id: string) => dispatch(removeFromCartState(id));

  const clearCart = () => dispatch(clearCartItems())

  // Checkout
  const createCheckoutSession = (items: CartProductType[]) =>
    dispatch(createNewCheckoutSession(items));

  const createCheckoutSessionSuccess = (sessionURL: string) =>
    dispatch(createNewCheckoutSessionSuccess(sessionURL));

  // Filters
  const setProductFilters = (filter: string) => dispatch(setFilters(filter));

  const changeCartProductQuantity = (id: string, newAmount: number) =>
    dispatch(changeProductQuantityState(id, newAmount));

  // Messages
  const displaySuccessMessage = (msg: string) => dispatch(displayMessageSuccess(msg));

  const displayErrorMessage = (msg: string) => dispatch(displayMessageError(msg));

  const displayInfoMessage = (msg: string) => dispatch(displayMessageInfo(msg));

  // Modals: ADMIN
  const openAdminProductModal = (selectedProduct: ProductType) => dispatch(adminProductModalOpen(selectedProduct));
  const closeAdminProductModal = () => dispatch(adminProductModalClose());
  
  // Modals: USERS
  const openCartModal = () => dispatch(cartModalOpen());

  const closeCartModal = () => dispatch(cartModalClose());

  const openCheckoutModal = () => dispatch(checkoutModalOpen());

  const closeCheckoutModal = () => dispatch(checkoutModalClose());

  const openCheckoutSuccessModal = () => dispatch(checkoutSuccessModalOpen());

  const closeCheckoutSuccessModal = () => dispatch(checkoutSuccessModalClose());

  const openCheckoutErrorModal = () => dispatch(checkoutErrorModalOpen());

  const closeCheckoutErrorModal = () => dispatch(checkoutErrorModalClose());

  const openDrawerModal = () => dispatch(drawerModalOpen());

  const closeDrawerModal = () => dispatch(drawerModalClose());

  const openFiltersModal = () => dispatch(filtersModalOpen());

  const closeFiltersModal = () => dispatch(filtersModalClose());

  const openLoginModal = () => dispatch(loginModalOpen());

  const closeLoginModal = () => dispatch(loginModalClose());

  const openProductModal = (selectedProduct: ProductType) =>
    dispatch(productModalOpen(selectedProduct));

  const closeProductModal = () => dispatch(productModalClose());

  const openExtrasModal = (sizesAndExtras: any) => dispatch(extrasModalOpen(sizesAndExtras));

  const closeExtrasModal = () => dispatch(extrasModalClose());

  const openUserModal = () => dispatch(userModalOpen());

  const closeUserModal = () => dispatch(userModalClose());

  // Orders

  const addOrder = (order: OrderItemType) => dispatch(addNewOrder(order));

  // Products

  const addProduct = (product: ProductType) => dispatch(addProductToStore(product));

  const removeProduct = (id: string) => dispatch(removeProductFromStore(id));

  const fetchProducts = () => dispatch(fetchProductsFromStore());

  const fetchProductsSuccess = (products: ProductType[]) =>
    dispatch(fetchProductsFromStoreSuccess(products));

  //Users
  const getUserDetails = () => dispatch(fetchUserDetails());

  const editUserDetails = (user: UserDetailsType) => dispatch(changeUserDetails(user));

  const editUserPassword = (oldPassword: string, password: string) => {
    dispatch(changeUserPassword(oldPassword, password));
  };

  return {
    addProduct,
    removeProduct,
    fetchProducts,
    fetchProductsSuccess,
    checkUserToken,
    userLogin,
    userLogout,
    registerUser,
    sendEmailValidation,
    dBEmailValidation,
    loadCart,
    addToCart,
    removeFromCart,
    changeCartProductQuantity,
    clearCart,
    displaySuccessMessage,
    displayErrorMessage,
    displayInfoMessage,
    createCheckoutSession,
    createCheckoutSessionSuccess,
    openAdminProductModal,
    closeAdminProductModal,
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
    openLoginModal,
    closeLoginModal,
    addOrder,
    openProductModal,
    closeProductModal,
    openExtrasModal,
    closeExtrasModal,
    openUserModal,
    closeUserModal,
    setProductFilters,
    getUserDetails,
    editUserDetails,
    editUserPassword,
  };
};

export default useAppActions;
