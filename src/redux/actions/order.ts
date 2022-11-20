import { NEW_ORDER, NEW_ORDER_SUCCESS, NEW_ORDER_ERROR } from './types';

export const addNewOrder = (order: OrderItemType) => ({
  type: NEW_ORDER,
  order,
});

export const addNewOrderSuccess = (responseOrder: OrderItemType) => ({
  type: NEW_ORDER_SUCCESS,
  responseOrder,
});

export const addNewOrderError = (error: string) => ({
  type: NEW_ORDER_ERROR,
  error,
});
