import { ReactNode } from 'react'
import { SpinnerPage } from '@packages/spinner'
import { Action } from '@packages/types'
import { AdminSection } from '~/components/AdminSection'
import { useProducts } from '~/hooks/useProducts'
import { ErrorComponent } from '~/components/ErrorComponent'
import { IoTrashOutline } from 'react-icons/io5'
import { BsPencil } from 'react-icons/bs'
import { Table } from '~/components/Table'
import { IMG_MAPPER } from '~/utils/products'
import { useToastNotifications } from '@packages/toast-notifications'

type ProductData = {
  id: string
  Image: ReactNode
  Title: string
  Calories: number
  'Carbs (g)': number
  'Protein (g)': number
  'Fat (g)': number
}

const columns = ['Image', 'Title', 'Calories', 'Carbs (g)', 'Protein (g)', 'Fat (g)']

export const ProductList = () => {
  const { data: products, isLoading, error } = useProducts()

  const { showInfoNotification } = useToastNotifications()

  const handleActions = (actionType: string, productId: string) => {
    if (actionType === 'edit') {
      showInfoNotification('Edit item will be avaiable soon')
    } else if (actionType === 'delete') {
      showInfoNotification('Delete item will be avaiable soon')
    }
  }

  const getActions: Action[] = [
    {
      label: 'Edit product',
      icon: <BsPencil size={20} className='text-blue-500' />,
      type: 'edit',
    },
    {
      label: 'Delete product',
      icon: <IoTrashOutline size={20} className='text-red-500' />,
      type: 'delete',
    },
  ]

  const data: ProductData[] = products?.map((product) => ({
    id: product._id,
    Image: (
      <img
        src={IMG_MAPPER[product.imgUri] || ''}
        alt={product.title}
        className='h-16 w-16 rounded-lg object-cover'
      />
    ),
    Title: product.title,
    Calories: product.nutritionalInfo.calories,
    'Carbs (g)': product.nutritionalInfo.carbs,
    'Protein (g)': product.nutritionalInfo.protein,
    'Fat (g)': product.nutritionalInfo.fat,
  }))

  if (isLoading) return <SpinnerPage />

  if (error) return <ErrorComponent description='Error getting products. Please try again later' />

  return (
    <AdminSection>
      <Table<ProductData>
        columns={columns}
        data={data}
        actions={getActions}
        handleActions={handleActions}
      />
    </AdminSection>
  )
}
