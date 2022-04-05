import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
} from '../actions/types'
import mock from '../../mockProduct.json'

// const initialState: ProductStateType = { products: [] }
const initialState: ProductStateType = { products: mock }

const productsReducer = (
  state = initialState,
  action: ProductActionType
): ProductStateType => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct: ProductType = {
        _id: action.product._id,
        title: action.product.title,
        description: action.product.description,
        price: action.product.price,
        quantity: action.product.quantity,
        imgUri: action.product.imgUri,
        suitableForInfo: action.product.suitableForInfo,
        nutritionalInfo: action.product.nutritionalInfo,
      }
      return {
        ...state,
        products: [...state.products, newProduct],
      }
    case DELETE_PRODUCT:
      const updatedProducts: ProductType[] = state.products.filter(
        (product) => product.id !== action.product.id
      )
      return {
        ...state,
        products: updatedProducts,
      }
    // case GET_PRODUCT:

    //   return {

    //   };
    case GET_PRODUCTS:
  }
  return state
}

export default productsReducer
