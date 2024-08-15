import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getUsers, getUser, updateUser, deleteUser } from '~//services/users'

export const useUsers = () => {
  const queryClient = useQueryClient()

  // Fetch all users
  const fetchUsers = () => {
    return useQuery(['users'], getUsers)
  }

  // Fetch a single user by email and token
  const fetchUser = (email: string, token: string) => {
    return useQuery(['user', email], () => getUser(email, token), {
      enabled: !!email && !!token, // Only fetch if email and token are provided
    })
  }

  // Update a user
  const mutateUpdateUser = () => {
    return useMutation(
      (userData: { id: string; data: any }) => updateUser(userData.id, userData.data),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['users'])
          queryClient.invalidateQueries(['user'])
        },
      },
    )
  }

  // Delete a user
  const mutateDeleteUser = () => {
    return useMutation((email: string) => deleteUser(email), {
      onSuccess: () => {
        queryClient.invalidateQueries(['users'])
      },
    })
  }

  return {
    fetchUsers,
    fetchUser,
    mutateUpdateUser,
    mutateDeleteUser,
  }
}
