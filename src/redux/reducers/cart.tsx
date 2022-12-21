import { LOCAL_STORAGE_CART_KEY } from '@constants';
import { clearLocalStorage, setValueToLocalStorage } from '@utils/localStorage';
import {
  LOAD_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
  CLEAR_CART,
} from '../actions/types';

const initialState: CartStateType = { items: [] };

const cartReducer = (
  state: CartStateType = initialState,
  action: CartActionType
): CartStateType => {
  const { id: actionId, type, product, id, newAmount } = action;
  const { items } = state;

  switch (type) {
    case LOAD_CART:
      return {
        ...state,
      };
    case ADD_TO_CART:
      const hasSameID = (item: CartProductType): boolean => item._id === product._id;
      const hasSameSize = (item: CartProductType): boolean =>
        item.selectedSize.label === product.selectedSize.label;
      const hasSameExtras = (item: CartProductType): boolean => {
        return (
          product.selectedExtras.length === item.selectedExtras.length &&
          product.selectedExtras.every(function (element) {
            return item.selectedExtras.includes(element);
          })
        );
      };
      const sameItem = (item) => hasSameID(item) && hasSameSize(item) && hasSameExtras(item);
      // Creates a copy of item found in Array (In case of duplicates)
      let item = items.find((item) => sameItem(item));
      console.log('itemReducer', item);
      if (item) {
        const updatedItems = items.map((item) => {
          if (sameItem(item)) {
            const newQuantity = item.quantity + product.quantity;
            return { ...item, quantity: newQuantity };
          } else {
            return item;
          }
        });
        setValueToLocalStorage(LOCAL_STORAGE_CART_KEY, updatedItems);

        return {
          ...state,
          items: updatedItems,
        };
      } else {
        const updatedItems = [...items, product];
        setValueToLocalStorage(LOCAL_STORAGE_CART_KEY, updatedItems);

        return {
          ...state,
          items: updatedItems,
        };
      }
    case REMOVE_FROM_CART:
      const updatedItems: CartProductType[] = items.filter((item: any) => item.id !== actionId);
      setValueToLocalStorage(LOCAL_STORAGE_CART_KEY, updatedItems);

      return {
        ...state,
        items: updatedItems,
      };
    case CHANGE_PRODUCT_QUANTITY:
      const newItems = items.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            quantity: newAmount,
          };
        }
        return item;
      });
      setValueToLocalStorage(LOCAL_STORAGE_CART_KEY, newItems);

      return {
        ...state,
        items: newItems,
      };

    case CLEAR_CART:
      clearLocalStorage();
      return {
        ...state,
        items: [],
      };
  }
  return state;
};

export default cartReducer;
