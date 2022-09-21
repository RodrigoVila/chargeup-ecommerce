import { shallowEqual } from 'react-redux';
import { useAppSelector } from './index';

//TODO: Type state

const useSelector = () => {
  //Auth
  const { isLoggedIn, user } = useAppSelector((state: any) => state.auth, shallowEqual);

  //Cart
  const cartItems: ProductType[] = useAppSelector((state: any) => state.cart.items, shallowEqual);
  const cartLength: number = useAppSelector((state: any) => state.cart.items.length, shallowEqual);
  //Filters TODO: Reduce one filter lvl
  const filters = useAppSelector((state) => state.filters.filters, shallowEqual);

  //Modals
  const isCartModalOpen: boolean = useAppSelector((state: any) => state.modal.cart, shallowEqual);
  const isCheckoutModalOpen = useAppSelector((state: any) => state.modal.checkout, shallowEqual);
  const isDrawerModalOpen: boolean = useAppSelector(
    (state: any) => state.modal.drawer,
    shallowEqual
  );
  const isFilterModalOpen: boolean = useAppSelector(
    (state: any) => state.modal.filters,
    shallowEqual
  );
  const isProductModalOpen: boolean = useAppSelector(
    (state: any) => state.modal.productModal,
    shallowEqual
  );
  const modalProduct: ProductType = useAppSelector(
    (state: any) => state.modal.selectedProduct,
    shallowEqual
  );

  //Products
  const products = useAppSelector((state) => state.products.products, shallowEqual);

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

export default useSelector;
