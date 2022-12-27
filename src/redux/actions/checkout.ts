import {
  CREATE_CHECKOUT_SESSION,
  CREATE_CHECKOUT_SESSION_ERROR,
  CREATE_CHECKOUT_SESSION_SUCCESS,
} from '../../constants/ActionTypes';

//TODO: type

export const createNewCheckoutSession = (newOrder: OrderType) => ({
  type: CREATE_CHECKOUT_SESSION,
  newOrder,
});

export const createNewCheckoutSessionSuccess = (sessionURL: string) => ({
  type: CREATE_CHECKOUT_SESSION_SUCCESS,
  session: sessionURL,
});

export const createNewCheckoutSessionError = (error: Error) => ({
  type: CREATE_CHECKOUT_SESSION_ERROR,
  error,
});
