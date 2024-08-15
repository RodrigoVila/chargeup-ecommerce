import { useEffect, useState } from 'react'

import { Spinner } from '@packages/spinner'

import { useAppActions, useAppSelector } from '~hooks'
import { ProductType } from '@packages/types'

import { Product, ProductSearchBar } from './components'
import { useIntl } from 'react-intl'

export const Products = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([])

  const { products, filters } = useAppSelector()

  const { fetchProducts } = useAppActions()

  const { formatMessage } = useIntl()

  const clearFilters = () => setFilteredProducts([])

  useEffect(() => {
    fetchProducts()
  }, [])

  // TODO: Los filtros se seleccionan en el modal OK y guardan su state en Redux. Falta que impacten en este componente
  useEffect(() => {
    const filterByProductName = () => {
      const filter = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
      searchValue.length > 1 ? setFilteredProducts(filter) : clearFilters()
    }

    filterByProductName()
  }, [searchValue])

  useEffect(() => {
    const filterByType = () => {
      if (filters.length > 0) {
        filters.map((f) => {
          const filter = products.filter((product) =>
            product.title.toLowerCase().includes(f.toLowerCase()),
          )
          setFilteredProducts(filter)
        })
      } else {
        clearFilters()
      }
    }

    filterByType()
  }, [filters])

  return (
    <>
      <div className='mt-6 flex h-full flex-wrap items-center justify-center pb-2'>
        <ProductSearchBar setSearchValue={setSearchValue} />
      </div>
      {products.length > 0 ? (
        <div className='relative mx-auto flex w-full flex-wrap justify-center text-left'>
          {filteredProducts.length > 0
            ? filteredProducts?.map((product) => <Product key={product._id} product={product} />)
            : products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      ) : (
        <div className='mt-20 flex h-full w-full items-center justify-center'>
          <Spinner> {formatMessage({ id: 'PRODUCTS_LOADING' })}</Spinner>
        </div>
      )}
    </>
  )
}
