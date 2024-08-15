const baseUrl = '/api/users'

export const getUsers = async () => {
  const response = await fetch(baseUrl)
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return response.json()
}

export const getUser = async (email: string, token: string) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, token }),
  })
  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }
  return response.json()
}

export const updateUser = async (id: string, userData: any) => {
  const response = await fetch(baseUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, ...userData }),
  })
  if (!response.ok) {
    throw new Error('Failed to update user')
  }
  return response.json()
}

export const deleteUser = async (email: string) => {
  const response = await fetch(baseUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
  if (!response.ok) {
    throw new Error('Failed to delete user')
  }
  return response.json()
}
