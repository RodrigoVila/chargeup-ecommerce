import {
  LOAD_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
  CLEAR_CART,
} from '@constants/ActionTypes';
import { LOCAL_STORAGE_CART_KEY } from '@constants/keys';
import { clearLocalStorage, setValueToLocalStorage } from '@utils/localStorage';

const initialState: CartStateType = { items: [] };

const cartReducer = (
  state: CartStateType = initialState,
  action: CartActionType
): CartStateType => {
  const { id: actionID, type, product, newAmount } = action;
  const { items } = state;

  switch (type) {
    case LOAD_CART:
      return {
        ...state,
      };
    case ADD_TO_CART:
      // Creates a copy of item found in Array (In case of duplicates)
      let item = items.find((item) => item.id === product.id);
      if (item) {
        const updatedItems = items.map((item) => {
          if (item.id === product.id) {
            const newQuantity = item.quantity + product.quantity;
            return {
              ...item,
              quantity: newQuantity,
              total: item.subTotal * newQuantity,
            };
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
      const updatedItems: CartProductType[] = items.filter((item: any) => item.id !== actionID);
      setValueToLocalStorage(LOCAL_STORAGE_CART_KEY, updatedItems);

      return {
        ...state,
        items: updatedItems,
      };
    case CHANGE_PRODUCT_QUANTITY:
      const newItems = items.map((item) => {
        if (item.id === actionID) {
          return {
            ...item,
            quantity: newAmount,
            total: item.subTotal * newAmount,
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
