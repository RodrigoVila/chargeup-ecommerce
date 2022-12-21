import {
  CREATE_CHECKOUT_SESSION,
  CREATE_CHECKOUT_SESSION_ERROR,
  CREATE_CHECKOUT_SESSION_SUCCESS,
} from './types';

//TODO: type

export const createNewCheckoutSession = (items: CartProductType[]) => ({
  type: CREATE_CHECKOUT_SESSION,
  items,
});

export const createNewCheckoutSessionSuccess = (sessionURL: string) => ({
  type: CREATE_CHECKOUT_SESSION_SUCCESS,
  session: sessionURL,
});

export const createNewCheckoutSessionError = (error: Error) => ({
  type: CREATE_CHECKOUT_SESSION_ERROR,
  error,
});
