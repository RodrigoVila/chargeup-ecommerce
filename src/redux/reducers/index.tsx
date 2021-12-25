import { combineReducers } from "redux";

import articleReducer from "./article";
import authReducer from "./auth";
import cartReducer from "./cart";
import toastReducer from "./toast_notifications";

export const rootReducer = combineReducers({
  articles: articleReducer,
  auth: authReducer,
  cart: cartReducer,
  toastMessage: toastReducer,
  //message: messageReducer
});

export type RootState = ReturnType<typeof rootReducer>;
