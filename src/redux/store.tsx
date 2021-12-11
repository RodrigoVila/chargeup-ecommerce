import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const store: Store<any> & {
  dispatch: DispatchType;
} = createStore(rootReducer, applyMiddleware(thunk));

export default store;
