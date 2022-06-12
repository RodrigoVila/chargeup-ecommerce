import { getProductList } from 'services/products'
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS_SUCCESS,
} from '../actions/types'

const initialState: ProductsStateType = { products: [] }

const productsReducer = (
  state = initialState,
  action: ProductsActionType
): ProductsStateType => {
  switch (action.type) {
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

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
      }
  }
  return state
}

export default productsReducer
