import { combineReducers } from 'redux'
import cartReducer from "./cart/reducer";
import articleReducer from "./articles/reducer";
import toastReducer from './toast notifications/reducer'

export default combineReducers({
  cart: cartReducer,
  articles: articleReducer,
  toastMessage: toastReducer
});
