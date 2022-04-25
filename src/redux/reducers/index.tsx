import { combineReducers } from 'redux'

import authReducer from './auth'
import cartReducer from './cart'
import checkoutReducer from './checkout'
import modalReducer from './modal'
import productsReducer from './products'
import toastReducer from './toastNotifications'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  modal: modalReducer,
  products: productsReducer,
  toastMessage: toastReducer,
})

export default rootReducer
