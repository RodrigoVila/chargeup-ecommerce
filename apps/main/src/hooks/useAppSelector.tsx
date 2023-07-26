import { createSelectorHook, shallowEqual } from 'react-redux';

import type { RootState } from '~redux/store';
import { CartProductType, ProductType } from '~types';

export const useSelector = createSelectorHook<RootState>();

export const useAppSelector = () => {
  //Auth
  const {
    isLoggedIn,
    isLoading: isAuthLoading,
    redirect: authRedirect,
    userLogin,
    isEmailValidated,
    isTokenForPasswordValidated,
  } = useSelector((state) => state.auth, shallowEqual);

  //Cart
  const cartItems: CartProductType[] = useSelector((state) => state.cart.items, shallowEqual);
  //Checkout
  const checkoutSession = useSelector((state) => state.checkout.session, shallowEqual);
  //Filters TODO: Reduce one filter lvl
  const filters = useSelector((state) => state.filters.filters, shallowEqual);

  //Admin MOdals
  const isAdminProductModalOpen: boolean = useSelector(
    (state) => state.modal.adminProduct,
    shallowEqual
  );
  //User Modals
  const isCartModalOpen: boolean = useSelector((state) => state.modal.cart, shallowEqual);
  const isCheckoutModalOpen = useSelector((state) => state.modal.checkout, shallowEqual);
  const isDrawerModalOpen: boolean = useSelector((state) => state.modal.drawer, shallowEqual);
  const isFilterModalOpen: boolean = useSelector((state) => state.modal.filters, shallowEqual);
  const isLoginModalOpen: boolean = useSelector((state) => state.modal.login, shallowEqual);
  const isExtrasModalOpen: boolean = useSelector((state) => state.modal.extras, shallowEqual);
  const isUserModalOpen: boolean = useSelector((state) => state.modal.user, shallowEqual);
  const isProductModalOpen: boolean = useSelector((state) => state.modal.product, shallowEqual);
  const selectedModalProduct: ProductType | null = useSelector(
    (state) => state.modal.selectedProduct,
    shallowEqual
  );

  //Products
  const { products, isLoading: areProductsLoading } = useSelector(
    (state) => state.products,
    shallowEqual
  );

  //User
  const { user: userDetails, isLoading: isUserDataLoading } = useSelector(
    (state) => state.user,
    shallowEqual
  );

  const { isContactFormLoading } = useSelector((state) => state.email, shallowEqual);

  return {
    isLoggedIn,
    isAuthLoading,
    authRedirect,
    userLogin,
    isEmailValidated,
    isTokenForPasswordValidated,
    checkoutSession,
    cartItems,
    filters,
    isAdminProductModalOpen,
    isCartModalOpen,
    isCheckoutModalOpen,
    isDrawerModalOpen,
    isFilterModalOpen,
    isLoginModalOpen,
    isExtrasModalOpen,
    isUserModalOpen,
    isProductModalOpen,
    selectedModalProduct,
    products,
    areProductsLoading,
    userDetails,
    isUserDataLoading,
    isContactFormLoading
  };
};
