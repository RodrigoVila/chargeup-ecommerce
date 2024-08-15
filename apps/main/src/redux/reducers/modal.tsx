import {
  CLOSE_ADMIN_PRODUCT_MODAL,
  CLOSE_CART_MODAL,
  CLOSE_CHECKOUT_MODAL,
  CLOSE_CHECKOUT_MODAL_ERROR,
  CLOSE_DRAWER_MODAL,
  CLOSE_EXTRAS_MODAL,
  CLOSE_FILTERS_MODAL,
  CLOSE_LOGIN_MODAL,
  CLOSE_OPEN_CHECKOUT_MODAL_SUCCESS,
  CLOSE_PRODUCT_DETAILS_MODAL,
  CLOSE_USER_MODAL,
  OPEN_ADMIN_PRODUCT_MODAL,
  OPEN_CART_MODAL,
  OPEN_CHECKOUT_MODAL,
  OPEN_CHECKOUT_MODAL_ERROR,
  OPEN_CHECKOUT_MODAL_SUCCESS,
  OPEN_DRAWER_MODAL,
  OPEN_EXTRAS_MODAL,
  OPEN_FILTERS_MODAL,
  OPEN_LOGIN_MODAL,
  OPEN_PRODUCT_DETAILS_MODAL,
  OPEN_USER_MODAL,
} from '~constants/ActionTypes'
import { ModalActionType, ModalStateType } from '@packages/types'

const initialState: ModalStateType = {
  adminProduct: false,
  cart: false,
  drawer: false,
  checkout: false,
  checkout_success: false,
  checkout_error: false,
  filters: false,
  login: false,
  selectedProduct: null,
  product: false,
  extras: false,
  user: false,
}

const modalReducer = (state = initialState, action: ModalActionType): ModalStateType => {
  const { type, selectedProduct } = action

  switch (type) {
    case OPEN_ADMIN_PRODUCT_MODAL:
      return {
        ...state,
        adminProduct: true,
        selectedProduct,
      }
    case CLOSE_ADMIN_PRODUCT_MODAL:
      return {
        ...state,
        adminProduct: false,
      }
    case OPEN_CART_MODAL:
      return {
        ...state,
        cart: true,
      }
    case CLOSE_CART_MODAL:
      return {
        ...state,
        cart: false,
      }
    case OPEN_CHECKOUT_MODAL:
      return {
        ...state,
        checkout: true,
      }
    case CLOSE_CHECKOUT_MODAL:
      return {
        ...state,
        checkout: false,
      }
    case OPEN_CHECKOUT_MODAL_SUCCESS:
      return {
        ...state,
        checkout_success: true,
      }
    case CLOSE_OPEN_CHECKOUT_MODAL_SUCCESS:
      return {
        ...state,
        checkout_success: false,
      }
    case OPEN_CHECKOUT_MODAL_ERROR:
      return {
        ...state,
        checkout_error: true,
      }
    case CLOSE_CHECKOUT_MODAL_ERROR:
      return {
        ...state,
        checkout_error: false,
      }
    case OPEN_DRAWER_MODAL:
      return {
        ...state,
        drawer: true,
      }
    case CLOSE_DRAWER_MODAL:
      return {
        ...state,
        drawer: false,
      }
    case OPEN_FILTERS_MODAL:
      return {
        ...state,
        filters: true,
      }
    case CLOSE_FILTERS_MODAL:
      return {
        ...state,
        filters: false,
      }
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        login: true,
      }
    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        login: false,
      }
    case OPEN_PRODUCT_DETAILS_MODAL:
      return {
        ...state,
        product: true,
        selectedProduct,
      }
    case CLOSE_PRODUCT_DETAILS_MODAL:
      return {
        ...state,
        product: false,
      }
    case OPEN_USER_MODAL:
      return {
        ...state,
        user: true,
      }
    case CLOSE_USER_MODAL:
      return {
        ...state,
        user: false,
      }
    case OPEN_EXTRAS_MODAL:
      return {
        ...state,
        extras: true,
        selectedProduct,
      }
    case CLOSE_EXTRAS_MODAL:
      return {
        ...state,
        extras: false,
        selectedProduct: null,
      }
  }

  return state
}

export default modalReducer
