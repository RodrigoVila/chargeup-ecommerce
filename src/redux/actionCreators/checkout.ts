import {
  CREATE_CHECKOUT_SESSION,
  CREATE_CHECKOUT_SESSION_SUCCESS,
} from '../actionTypes'

//TODO: type

export const createCheckoutSession = () => ({
  type: CREATE_CHECKOUT_SESSION,
})

export const createCheckoutSessionSuccess = (sessionURL: string) => ({
  type: CREATE_CHECKOUT_SESSION_SUCCESS,
  session: sessionURL,
})
