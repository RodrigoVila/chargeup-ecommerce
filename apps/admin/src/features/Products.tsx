import { twMerge } from 'tailwind-merge'
import { IoTrashOutline } from 'react-icons/io5'
import { BsPencil } from 'react-icons/bs'

import productsMock from '../mocks/products.json' // Assuming your mock products are stored here
import { AdminSection } from '~/components/AdminSection'
import { Action } from '~/components/Table'
import ProductCard from '~/components/ProductCard'
import { ProductType } from '@packages/types'
import { useState } from 'react'

export const ProductList = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [products, setProducts] = useState<ProductType[]>(productsMock as ProductType[])
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

  const handleEdit = (product: ProductType) => {
    alert('Edit user not avaiable')
    // setSelectedProduct(product)
    // setModalOpen(true)
  }
  const handleDelete = (product: ProductType) => {
    if (window.confirm(`Are you sure you want to delete product: ${product.title}?`)) {
      setProducts((currProds) => currProds.filter((prod) => prod._id !== product._id))
    }
  }
  return (
    <AdminSection>
      <div className='flex flex-wrap justify-center gap-6'>
        {products.map((product) => (
          <ProductCard product={product} onEdit={handleEdit} onDelete={handleDelete} />
          // <Product product={product} />
        ))}
      </div>
    </AdminSection>
  )
}
