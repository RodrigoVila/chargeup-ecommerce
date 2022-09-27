import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers';
import rootSaga from './sagas';

import { LOCAL_STORAGE_DATA_KEY } from '@constants';
import { getValueFromLocalStorage } from '@utils/localStorage';

const sagaMiddleware = createSagaMiddleware();

const storedUser = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY);

const AUTH_INITIAL_STATE = {
  isLoggedIn: false,
  isAuthLoading: false,
  user: null,
};

const preloadState = {
  auth: storedUser ? storedUser : AUTH_INITIAL_STATE,
};

const store = createStore(
  rootReducer,
  preloadState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
