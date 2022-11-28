import { shallowEqual } from 'react-redux';
import { createSelectorHook } from 'react-redux';

import type { RootState } from '@redux/store';

export const useSelector = createSelectorHook<RootState>();

const useAppSelector = () => {
  //Auth
  const {
    isLoggedIn,
    isLoading: isAuthLoading,
    userLogin,
    isEmailValidated,
  } = useSelector((state) => state.auth, shallowEqual);

  //Cart
  const cartItems: ProductType[] = useSelector((state) => state.cart.items, shallowEqual);
  //Checkout
  const checkoutSession = useSelector((state) => state.checkout.session, shallowEqual);
  //Filters TODO: Reduce one filter lvl
  const filters = useSelector((state) => state.filters.filters, shallowEqual);

  //Admin MOdals
  const isAdminProductModalOpen: boolean = useSelector((state) => state.modal.adminProduct, shallowEqual);
  //User Modals
  const isCartModalOpen: boolean = useSelector((state) => state.modal.cart, shallowEqual);
  const isCheckoutModalOpen = useSelector((state) => state.modal.checkout, shallowEqual);
  const isDrawerModalOpen: boolean = useSelector((state) => state.modal.drawer, shallowEqual);
  const isFilterModalOpen: boolean = useSelector((state) => state.modal.filters, shallowEqual);
  const isLoginModalOpen: boolean = useSelector((state) => state.modal.login, shallowEqual);
  const isExtraModalOpen: boolean = useSelector((state) => state.modal.productExtras, shallowEqual);
  const isUserModalOpen: boolean = useSelector((state) => state.modal.user, shallowEqual);
  const isProductModalOpen: boolean = useSelector((state) => state.modal.product, shallowEqual);
  const modalProduct: ProductType = useSelector(
    (state) => state.modal.selectedProduct,
    shallowEqual
  );

  //Products
  const { products, isLoading: areProductsLoading } = useSelector(
    (state) => state.products,
    shallowEqual
  );

  //Users
  const {
    user,
    users,
    isLoading: areUsersLoading,
  } = useSelector((state) => state.users, shallowEqual);

  return {
    isLoggedIn,
    isAuthLoading,
    userLogin,
    isEmailValidated,
    checkoutSession,
    cartItems,
    filters,
    isAdminProductModalOpen,
    isCartModalOpen,
    isCheckoutModalOpen,
    isDrawerModalOpen,
    isFilterModalOpen,
    isLoginModalOpen,
    isExtraModalOpen,
    isUserModalOpen,
    isProductModalOpen,
    modalProduct,
    products,
    areProductsLoading,
    user,
    users,
    areUsersLoading,
  };
};

export default useAppSelector;
