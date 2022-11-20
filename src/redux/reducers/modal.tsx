import {
  OPEN_CART_MODAL,
  CLOSE_CART_MODAL,
  OPEN_CHECKOUT_MODAL,
  CLOSE_CHECKOUT_MODAL,
  OPEN_CHECKOUT_MODAL_SUCCESS,
  CLOSE_OPEN_CHECKOUT_MODAL_SUCCESS,
  OPEN_CHECKOUT_MODAL_ERROR,
  CLOSE_CHECKOUT_MODAL_ERROR,
  OPEN_DRAWER_MODAL,
  CLOSE_DRAWER_MODAL,
  OPEN_FILTERS_MODAL,
  CLOSE_FILTERS_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  OPEN_PRODUCT_DETAILS_MODAL,
  CLOSE_PRODUCT_DETAILS_MODAL,
  OPEN_USER_MODAL,
  CLOSE_USER_MODAL,
} from '../actions/types';

const initialState: ModalStateType = {
  cart: false,
  drawer: false,
  checkout: false,
  checkout_success: false,
  checkout_error: false,
  filters: false,
  login: false,
  selectedProduct: null,
  productModal: false,
  userModal: false,
};

const modalReducer = (state = initialState, action: ModalActionType): ModalStateType => {
  const { type, selectedProduct } = action;
  
  switch (type) {
    case OPEN_CART_MODAL:
      return {
        ...state,
        cart: true,
      };
    case CLOSE_CART_MODAL:
      return {
        ...state,
        cart: false,
      };
    case OPEN_CHECKOUT_MODAL:
      return {
        ...state,
        checkout: true,
      };
    case CLOSE_CHECKOUT_MODAL:
      return {
        ...state,
        checkout: false,
      };
    case OPEN_CHECKOUT_MODAL_SUCCESS:
      return {
        ...state,
        checkout_success: true,
      };
    case CLOSE_OPEN_CHECKOUT_MODAL_SUCCESS:
      return {
        ...state,
        checkout_success: false,
      };
    case OPEN_CHECKOUT_MODAL_ERROR:
      return {
        ...state,
        checkout_error: true,
      };
    case CLOSE_CHECKOUT_MODAL_ERROR:
      return {
        ...state,
        checkout_error: false,
      };
    case OPEN_DRAWER_MODAL:
      return {
        ...state,
        drawer: true,
      };
    case CLOSE_DRAWER_MODAL:
      return {
        ...state,
        drawer: false,
      };
    case OPEN_FILTERS_MODAL:
      return {
        ...state,
        filters: true,
      };
    case CLOSE_FILTERS_MODAL:
      return {
        ...state,
        filters: false,
      };
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        login: true,
      };
    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        login: false,
      };
    case OPEN_PRODUCT_DETAILS_MODAL:
      return {
        ...state,
        productModal: true,
        selectedProduct,
      };
    case CLOSE_PRODUCT_DETAILS_MODAL:
      return {
        ...state,
        productModal: false,
      };
    case OPEN_USER_MODAL:
      return {
        ...state,
        userModal: true,
      };
    case CLOSE_USER_MODAL:
      return {
        ...state,
        userModal: false,
      };
  }

  return state;
};

export default modalReducer;
