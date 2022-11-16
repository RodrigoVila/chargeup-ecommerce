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
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
      };
    case ADD_TO_CART:
      const newItem = {
        id: action.product.id,
        title: action.product.title,
        description: action.product.description,
        quantity: action.product.quantity,
        price: action.product.price,
        imgUri: action.product.imgUri,
        nutritionalInfo: action.product.nutritionalInfo,
        suitableForInfo: action.product.suitableForInfo,
        strapiId: action.product.strapiId,
      };

      // Creates a copy of item found in Array (In case of duplicates)
      let item = state.items.find((item) => item.id === newItem.id);
      if (item) {
        const updatedItems = state.items.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, quantity: (item.quantity += newItem.quantity) };
          } else {
            return item
          }
        });
        // setValueToLocalStorage(LOCAL_STORAGE_CART_KEY, updatedItems);
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        const updatedItems = [...state.items, newItem];
        // setValueToLocalStorage(LOCAL_STORAGE_CART_KEY, updatedItems);
        return {
          ...state,
          items: updatedItems,
        };
      }
    case REMOVE_FROM_CART:
      const updatedItems: ProductType[] = state.items.filter((item: any) => item.id !== action.id);
      // setValueToLocalStorage(LOCAL_STORAGE_CART_KEY, updatedItems);
      return {
        ...state,
        items: updatedItems,
      };
    case CHANGE_PRODUCT_QUANTITY:
      const newItems = state.items.map((item) => {
        if (item.id === action.product.id) {
          return {
            ...item,
            quantity: action.newAmount,
          };
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
      };
  }
  return state;
};

export default cartReducer;
