import { LOCAL_STORAGE_CART_KEY } from '@constants';
import { setValueToLocalStorage } from '@utils/localStorage';
import {
  LOAD_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
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
      // Creates a copy of item found in Array (In case of duplicates)
      let item = items.find((item) => item.id === product.id);
      
      if (item) {
        const updatedItems = items.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: (item.quantity += product.quantity) };
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
      const updatedItems: ProductType[] = items.filter((item: any) => item.id !== actionId);
      setValueToLocalStorage(LOCAL_STORAGE_CART_KEY, updatedItems);

      return {
        ...state,
        items: updatedItems,
      };
    case CHANGE_PRODUCT_QUANTITY:
      const newItems = items.map((item) => {
        if (item.id === id) {
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
  }
  return state;
};

export default cartReducer;
