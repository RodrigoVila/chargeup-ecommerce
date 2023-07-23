import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from '@redux-saga/core'
import rootReducer from './reducers'
import rootSaga from './sagas'

import { AUTH_INITIAL_STATE } from '~constants/initialState'
import { LOCAL_STORAGE_CART_KEY, LOCAL_STORAGE_DATA_KEY } from '~constants/keys'
import { getValueFromLocalStorage } from '~utils'

const sagaMiddleware = createSagaMiddleware()

const storedUser = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY)
const storedCart = getValueFromLocalStorage(LOCAL_STORAGE_CART_KEY)

const preloadState = {
  auth: storedUser ? storedUser : AUTH_INITIAL_STATE,
  cart: {
    items: storedCart ? storedCart : [],
  },
}

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  preloadedState: preloadState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
