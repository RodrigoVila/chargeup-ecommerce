import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '~/services/products'

export const useProducts = () => {
  const queryResult = useQuery({
    queryKey: ['getProducts'],
    queryFn: fetchProducts,
  })

  return queryResult
}
