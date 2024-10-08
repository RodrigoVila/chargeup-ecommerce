import { OrderType } from '@packages/types'
import { NEW_ORDER, NEW_ORDER_ERROR, NEW_ORDER_SUCCESS } from '~constants/ActionTypes'

export const addNewOrder = (order: OrderType) => ({
  type: NEW_ORDER,
  order,
})

export const addNewOrderSuccess = (responseOrder: OrderType) => ({
  type: NEW_ORDER_SUCCESS,
  responseOrder,
})

export const addNewOrderError = (error: string) => ({
  type: NEW_ORDER_ERROR,
  error,
})
