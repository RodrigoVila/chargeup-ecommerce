import { ProductType } from '@packages/types'

const API_URL = 'http://localhost:3000/api/products'

export const getProducts = async (): Promise<ProductType[]> => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json()
  return data.products
}

export const getProductById = async (id: string): Promise<ProductType> => {
  const response = await fetch(`${API_URL}/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }
  const data = await response.json()
  return data
}

export const createProduct = async (product: ProductType): Promise<ProductType> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
  if (!response.ok) {
    throw new Error('Failed to create product')
  }
  const data = await response.json()
  return data
}

export const updateProduct = async (
  id: string,
  product: Partial<ProductType>,
): Promise<ProductType> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
  if (!response.ok) {
    throw new Error('Failed to update product')
  }
  const data = await response.json()
  return data
}

export const deleteProduct = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Failed to delete product')
  }
}
