import { CREATE_CHECKOUT_SESSION_SUCCESS } from '../actions/types'

//TODO: Type this when know session return type
const initialState: string = ''

const checkoutReducer = (
  state = initialState,
  action: CheckoutActionType
): CheckoutStateType => {
  switch (action.type) {
    case CREATE_CHECKOUT_SESSION_SUCCESS:
      return {
        session: action.session,
      }
  }
  return state
}

export default checkoutReducer
