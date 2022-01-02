import { combineReducers } from "redux";

import productsReducer from "./products";
import authReducer from "./auth";
import cartReducer from "./cart";
import toastReducer from "./toast_notifications";

export const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  cart: cartReducer,
  toastMessage: toastReducer,
  //message: messageReducer
});

export type RootState = ReturnType<typeof rootReducer>;
