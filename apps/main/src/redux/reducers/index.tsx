import { combineReducers } from 'redux'

import authReducer from './auth'
import cartReducer from './cart'
import checkoutReducer from './checkout'
import emailReducer from './email'
import productsReducer from './products'
import toastReducer from './toastNotifications'
import userReducer from './user'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  email: emailReducer,
  products: productsReducer,
  toastMessage: toastReducer,
  user: userReducer,
})

export default rootReducer
