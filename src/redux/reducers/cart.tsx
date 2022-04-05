import { LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState: CartStateType = {
  cart: [],
};

const cartReducer = (
  state = initialState,
  action: ProductActionType
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
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    case REMOVE_FROM_CART:
      const updatedItems: ProductType[] = state.cart.filter(
        (item: any) => item.id !== action.product
      );
      return {
        ...state,
        cart: updatedItems,
      };
  }
  return state;
};

export default cartReducer;
