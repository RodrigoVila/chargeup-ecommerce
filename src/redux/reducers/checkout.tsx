import { CREATE_CHECKOUT_SESSION_SUCCESS, CREATE_CHECKOUT_SESSION_ERROR } from '../../constants/ActionTypes';

const initialState: CheckoutStateType = { session: null, sessionError: null };

const checkoutReducer = (state = initialState, action: CheckoutActionType): CheckoutStateType => {
  const { session, sessionError } = action;
  switch (action.type) {
    case CREATE_CHECKOUT_SESSION_SUCCESS:
      return {
        session,
        sessionError: null,
      };
    case CREATE_CHECKOUT_SESSION_ERROR:
      return {
        session: null,
        sessionError,
      };
  }

  return state;
};

export default checkoutReducer;
