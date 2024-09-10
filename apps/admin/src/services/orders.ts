import { OrderType } from '@packages/types'

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/orders`

export const getOrders = async (): Promise<OrderType[]> => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch orders')
  }

  const data = await response.json()
  return data.orders
}

export const getOrderById = async (id: string): Promise<OrderType> => {
  const response = await fetch(`${API_URL}/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch order')
  }

  const data = await response.json()
  return data
}

export const createOrder = async (order: OrderType): Promise<OrderType> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })

  if (!response.ok) {
    throw new Error('Failed to create order')
  }

  const data = await response.json()
  return data
}

export const updateOrder = async (id: string, order: Partial<OrderType>): Promise<OrderType> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })

  if (!response.ok) {
    throw new Error('Failed to update order')
  }

  const data = await response.json()
  return data
}

export const deleteOrder = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete order')
  }
}
