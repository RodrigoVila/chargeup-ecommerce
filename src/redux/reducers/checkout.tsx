import { getProductList } from 'services/products'
import { CREATE_CHECKOUT_SESSION_SUCCESS } from '../actionTypes'

//TODO: Type this
const initialState: any = null

const checkoutReducer = (
  state = initialState,
  action: CheckoutActionType
): any => {
  switch (action.type) {
    case CREATE_CHECKOUT_SESSION_SUCCESS:
      return {
        ...state,
        checkoutSession: action.checkoutSession,
      }
  }
  return state
}

export default checkoutReducer
