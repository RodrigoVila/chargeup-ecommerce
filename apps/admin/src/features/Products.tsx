import { useState } from 'react'
import { ProductType } from '@packages/types'

import { AdminSection } from '~/components/AdminSection'
import { ProductCard } from '~/components/products/ProductCard'
import { ProductModal } from '~/components/products/ProductModal'

import productsMock from '../mocks/products.json'

export const ProductList = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [products, setProducts] = useState<ProductType[]>(productsMock as ProductType[])
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

  const handleEdit = (product: ProductType) => {
    setSelectedProduct(product)
    setModalOpen(true)
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
        ))}
      </div>
      {selectedProduct && (
        <ProductModal isOpen={isModalOpen} setOpen={setModalOpen} product={selectedProduct} />
      )}
    </AdminSection>
  )
}
