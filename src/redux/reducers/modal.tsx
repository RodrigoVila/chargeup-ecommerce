import {
  OPEN_CART,
  CLOSE_CART,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  OPEN_CHECKOUT,
  CLOSE_CHECKOUT,
  OPEN_PRODUCT_DETAILS,
  CLOSE_PRODUCT_DETAILS,
  OPEN_CHECKOUT_SUCCESS,
  CLOSE_CHECKOUT_SUCCESS,
  OPEN_CHECKOUT_ERROR,
  CLOSE_CHECKOUT_ERROR,
} from '../actionTypes'

const initialState: ModalStateType = {
  cart: false,
  drawer: false,
  checkout: false,
  checkout_success: false,
  checkout_error: false,
}

const modalReducer = (state = initialState, action: ModalActionType): ModalStateType => {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...state,
        cart: true,
      }
    case CLOSE_CART:
      return {
        ...state,
        cart: false,
      }
    case OPEN_DRAWER:
      return {
        ...state,
        drawer: true,
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        drawer: false,
      }
    case OPEN_PRODUCT_DETAILS:
      return {
        ...state,
        product: true,
      }
    case CLOSE_PRODUCT_DETAILS:
      return {
        ...state,
        product: false,
      }

    case OPEN_CHECKOUT:
      return {
        ...state,
        checkout: true,
      }
    case CLOSE_CHECKOUT:
      return {
        ...state,
        checkout: false,
      }
    case OPEN_CHECKOUT_SUCCESS:
      return {
        ...state,
        checkout_success: true,
      }
    case CLOSE_CHECKOUT_SUCCESS:
      return {
        ...state,
        checkout_success: false,
      }
    case OPEN_CHECKOUT_ERROR:
      return {
        ...state,
        checkout_error: true,
      }
    case CLOSE_CHECKOUT_ERROR:
      return {
        ...state,
        checkout_error: false,
      }
  }

  return state
}

export default modalReducer
