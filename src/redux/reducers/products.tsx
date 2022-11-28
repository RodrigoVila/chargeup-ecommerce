import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from '../actions/types';

const initialState: ProductsStateType = { products: [], isLoading: false, error: null };

const productsReducer = (state = initialState, action: ProductsActionType): ProductsStateType => {
  const { type, products, error } = action;

  switch (type) {
    // Future implementation
    // case ADD_PRODUCT:
    //   const newProduct: ProductType = {
    //     id: action.product.id,
    //     title: action.product.title,
    //     description: action.product.description,
    //     price: action.product.price,
    //     quantity: action.product.quantity,
    //     imgUri: action.product.imgUri,
    //     suitableForInfo: action.product.suitableForInfo,
    //     nutritionalInfo: action.product.nutritionalInfo,
    //   }
    //   return {
    //     ...state,
    //     products: [...state.products, newProduct],
    //   }
    // case DELETE_PRODUCT:
    //   const updatedProducts: ProductType[] = state.products.filter(
    //     (product) => product.id !== action.product.id
    //   )
    //   return {
    //     ...state,
    //     products: updatedProducts,
    //   }

    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products,
        isLoading: false,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error,
        isLoading:false
      };
  }
  return state;
};

export default productsReducer;
