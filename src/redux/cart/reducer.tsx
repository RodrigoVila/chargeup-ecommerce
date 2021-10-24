import { LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState: CartStateType = {
  cart: [],
};

const cartReducer = (
  //Tipo OK, necesitamos el state del cart
  state: CartStateType = initialState,
  //Action OK. action.article.algo
  action: ArticleActionType
): CartStateType => {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
      };
    case ADD_TO_CART:
      const newItem = {
        title: action.article.title,
        id: action.article.id,
        description: action.article.description,
        nutritionalInfo: action.article.nutritionalInfo,
        suitableForInfo: action.article.suitableForInfo,
        price: action.article.price,
        imgUri: action.article.imgUri,
        quantity: action.article.quantity
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    case REMOVE_FROM_CART:
      const updatedItems: ArticleType[] = state.cart.filter(
        (item:ArticleType) => item.id !== action.article.id
      )
      return {
        ...state,
        cart: updatedItems,
      };
  }
  return state;
};

export default cartReducer;
