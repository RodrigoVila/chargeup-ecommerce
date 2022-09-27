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
  setAuthLoading,
  userTokenCheck,
} from '@redux/actions/auth';
import {
  loadCartState,
  addToCartState,
  removeFromCartState,
  changeProductQuantityState,
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
} from '@redux/actions/modal';

import { setFilters } from '@redux/actions/filters';

const useAppActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Products
  const addProduct = (product: ProductType) => dispatch(addProductToStore(product));
  const removeProduct = (id: string) => dispatch(removeProductFromStore(id));
  const fetchProducts = () => dispatch(fetchProductsFromStore());
  const fetchProductsSuccess = (products: ProductType[]) =>
    dispatch(fetchProductsFromStoreSuccess(products));

  // Auth
  const setLoadingAuth = (isAuthLoading: boolean) => dispatch(setAuthLoading(isAuthLoading));
  const checkUserToken = (user: UserLoginType) => dispatch(userTokenCheck(user));
  const userLogin = (user: UserType) => {
    setLoadingAuth(true);
    dispatch(loginUser(user));
  };
  const userLogout = () => dispatch(logoutUser());
  const registerUser = (user: UserType) => {
    setLoadingAuth(true);
    dispatch(registerNewUser(user));
  };

  // Cart
  const loadCart = (products: ProductType[]) => dispatch(loadCartState(products));
  const addToCart = (product: ProductType) => dispatch(addToCartState(product));
  const removeFromCart = (id: string) => dispatch(removeFromCartState(id));
  const changeCartProductQuantity = (id: string, newAmount: number) =>
    dispatch(changeProductQuantityState(id, newAmount));

  // Messages
  const displaySuccessMessage = (msg: string) => dispatch(displayMessageSuccess(msg));
  const displayErrorMessage = (msg: string) => dispatch(displayMessageError(msg));
  const displayInfoMessage = (msg: string) => dispatch(displayMessageInfo(msg));

  // Checkout
  const createCheckoutSession = () => dispatch(createNewCheckoutSession());
  const createCheckoutSessionSuccess = (sessionURL: string) =>
    dispatch(createNewCheckoutSessionSuccess(sessionURL));

  // Modals
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

  // filters
  const setProductFilters = (filter: string) => dispatch(setFilters(filter));

  return {
    addProduct,
    removeProduct,
    fetchProducts,
    fetchProductsSuccess,
    setLoadingAuth,
    checkUserToken,
    userLogin,
    userLogout,
    registerUser,
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
    openLoginModal,
    closeLoginModal,
    openProductModal,
    closeProductModal,
    setProductFilters,
  };
};

export default useAppActions;
