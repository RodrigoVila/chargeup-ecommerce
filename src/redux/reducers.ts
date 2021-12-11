import { combineReducers } from 'redux'
import cartReducer from "./cart/reducer";
import articleReducer from "./articles/reducer";
import toastReducer from './toast notifications/reducer'
import orderReducer from './order/reducer'

export default combineReducers({
  cart: cartReducer,
  articles: articleReducer,
  toastMessage: toastReducer,
  order: orderReducer
});
