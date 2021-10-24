import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

const store: Store<any> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export default store;
