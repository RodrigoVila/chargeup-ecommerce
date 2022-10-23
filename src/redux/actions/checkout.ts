import {
  CREATE_CHECKOUT_SESSION,
  CREATE_CHECKOUT_SESSION_SUCCESS,
} from './types'

//TODO: type

export const createNewCheckoutSession = () => ({
  type: CREATE_CHECKOUT_SESSION,
})

export const createNewCheckoutSessionSuccess = (sessionURL: string) => ({
  type: CREATE_CHECKOUT_SESSION_SUCCESS,
  session: sessionURL,
})
