import { NEW_ORDER_ERROR, NEW_ORDER_SUCCESS } from '@constants/ActionTypes';
import { OrderActionType, OrderStateType } from 'types';

const initialState: OrderStateType = { order: null, orderResponse: null, error: null };

const orderReducer = (state = initialState, action: OrderActionType): OrderStateType => {
  const { orderResponse, error } = action;
  switch (action.type) {
    case NEW_ORDER_SUCCESS:
      return {
        ...state,
        orderResponse,
      };
    case NEW_ORDER_ERROR:
      return {
        ...state,
        error,
      };
  }
  return state;
};
export default orderReducer;
