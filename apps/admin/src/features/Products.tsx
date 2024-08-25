import { useEffect, useState } from 'react'
import { Spinner } from '@packages/spinner'
import { ProductType } from '@packages/types'

import { AdminSection } from '~/components/AdminSection'
import { ProductCard } from '~/components/products/ProductCard'
import { ProductModal } from '~/components/products/ProductModal'
import { useProducts } from '~/hooks/useProducts'
import { ErrorComponent } from '~/components/ErrorComponent'

export const ProductList = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

  const { data: products, isLoading, error } = useProducts()
  const [localProducts, setLocalProducts] = useState<ProductType[]>([])

  const handleEdit = (product: ProductType) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }
  const handleDelete = (product: ProductType) => {
    if (window.confirm(`Are you sure you want to delete product: ${product.title}?`)) {
      setLocalProducts((currentProducts) =>
        currentProducts.filter((prod) => prod._id !== product._id),
      )
    }
  }

  useEffect(() => {
    if (products) setLocalProducts(products)
  }, [products])

  if (isLoading) return <Spinner />

  if (error) return <ErrorComponent description='Error getting products. Please try again later' />

  return (
    <AdminSection>
      <div className='flex flex-wrap justify-center gap-6'>
        {localProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal isOpen={isModalOpen} setOpen={setModalOpen} product={selectedProduct} />
      )}
    </AdminSection>
  )
}
