import { shallowEqual } from 'react-redux';
import { createSelectorHook } from 'react-redux';

import type { RootState } from '@redux/store';

export const useSelector = createSelectorHook<RootState>();

const useAppSelector = () => {
  //Auth
  const { isLoggedIn, user } = useSelector((state) => state.auth, shallowEqual);

  //Cart
  const cartItems: ProductType[] = useSelector((state) => state.cart.items, shallowEqual);
  const cartLength: number = useSelector((state) => state.cart.items.length, shallowEqual);
  //Filters TODO: Reduce one filter lvl
  const filters = useSelector((state) => state.filters.filters, shallowEqual);

  //Modals
  const isCartModalOpen: boolean = useSelector((state) => state.modal.cart, shallowEqual);
  const isCheckoutModalOpen = useSelector((state) => state.modal.checkout, shallowEqual);
  const isDrawerModalOpen: boolean = useSelector((state) => state.modal.drawer, shallowEqual);
  const isFilterModalOpen: boolean = useSelector((state) => state.modal.filters, shallowEqual);
  const isProductModalOpen: boolean = useSelector(
    (state) => state.modal.productModal,
    shallowEqual
  );
  const modalProduct: ProductType = useSelector(
    (state) => state.modal.selectedProduct,
    shallowEqual
  );

  //Products
  const products = useSelector((state) => state.products.products, shallowEqual);

  return {
    isLoggedIn,
    user,
    cartItems,
    cartLength,
    filters,
    isCartModalOpen,
    isCheckoutModalOpen,
    isDrawerModalOpen,
    isFilterModalOpen,
    isProductModalOpen,
    modalProduct,
    products,
  };
};

export default useAppSelector;
