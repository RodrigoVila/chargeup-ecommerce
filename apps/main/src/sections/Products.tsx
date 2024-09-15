import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { Spinner } from '@packages/spinner'
import { ProductType } from '@packages/types'

import { Section } from 'sections/components'
import { useAppActions, useAppSelector } from '~hooks'
import { Product, ProductSearchBar } from '~components/products'

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([])
  const [isSeeMoreModalOpen, setSeeMoreModalOpen] = useState(false)
  const [isOpenProductExtras, setOpenProductExtras] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const { products, areProductsLoading } = useAppSelector()

  const { fetchProducts } = useAppActions()

  const { formatMessage } = useIntl()

  const handleSeeMore = (product: ProductType) => {
    setSelectedProduct(product)
    setSeeMoreModalOpen(true)
  }
  const handleClickOnSelect = (product: ProductType) => {
    setSelectedProduct(product)
    setOpenProductExtras(true)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    const filter = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    )

    setFilteredProducts(filter)
  }, [searchValue, products])

  if (areProductsLoading) {
    return (
      <div className='mt-32 flex h-full min-h-screen w-full items-start justify-center'>
        <Spinner svgClassName='animate-spin'>{formatMessage({ id: 'PRODUCTS_LOADING' })}</Spinner>
      </div>
    )
  }

  return (
    <Section
      id='products'
      title={formatMessage({ id: 'PRODUCTS' })}
      className='min-h-screen justify-start'
      withOverlay={false}
    >
      <div className='mt-6 flex h-full flex-wrap items-center justify-center pb-2'>
        <ProductSearchBar setSearchValue={setSearchValue} />
      </div>
      <div className='relative mx-auto flex w-full flex-wrap justify-center text-left'>
        {searchValue && filteredProducts.length === 0 && <p className='mt-12'>No products...</p>}
        {filteredProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </Section>
  )
}
