import { combineReducers } from 'redux'
import cartReducer from "./cart/reducer";
import articleReducer from "./articles/reducer";

export default combineReducers({
  cart: cartReducer,
  articles: articleReducer,
});
