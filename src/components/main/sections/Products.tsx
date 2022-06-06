import { FC, useState, useEffect } from 'react'
import { BsFilterCircle, BsFilterCircleFill } from 'react-icons/bs'

import { fetchProducts, openProductDetailModal } from '@redux/actionCreators'
import { useAppDispatch, useAppSelector } from '@hooks'

import Product from '@main/Product'
import ProductSearchBar from '@main/ProductSearchBar'
import ProductModal from '@main/ProductModal'
import Filters from '@main/Filters'

const Products: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const [selected, setSelected] = useState<ProductType | null>(null)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [areFiltersVisible, setFiltersVisible] = useState(false)

  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)

  const onClick = (product: ProductType) => {
    setSelected(product)
    dispatch(openProductDetailModal())
  }

  const toggleFilters = () => setFiltersVisible(!areFiltersVisible)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    const filterByProductName = () => {
      const filter = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      searchValue.length > 1 ? setFilteredProducts(filter) : setFilteredProducts([])
    }

    filterByProductName()
  }, [searchValue])

  return (
    <>
      {selected && <ProductModal product={selected} />}
      <div
        id="products"
        className="h-full min-h-screen w-full bg-[url('/purpleTexture.svg')] bg-cover bg-center bg-repeat pt-4"
      >
        <div className="mx-auto flex max-w-4xl items-center justify-center">
          {areFiltersVisible ? (
            <BsFilterCircleFill
              size={33}
              color="white"
              className="cursor-pointer"
              onClick={toggleFilters}
            />
          ) : (
            <BsFilterCircle
              size={33}
              color="white"
              className="cursor-pointer"
              onClick={toggleFilters}
            />
          )}

          <ProductSearchBar setSearchValue={setSearchValue} />
        </div>
        <Filters isVisible={areFiltersVisible} />
        {products.length > 0 && (
          <div className="relative mx-auto flex w-full flex-wrap justify-center ">
            {filteredProducts.length > 0
              ? filteredProducts?.map((p) => (
                  <Product
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    price={p.price}
                    quantity={p.quantity}
                    imgUri={p.imgUri}
                    nutritionalInfo={p.nutritionalInfo}
                    suitableForInfo={p.suitableForInfo}
                    onClick={() => onClick(p)}
                  />
                ))
              : products.length > 0 ? products?.map((p) => (
                  <Product
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    price={p.price}
                    quantity={p.quantity}
                    imgUri={p.imgUri}
                    nutritionalInfo={p.nutritionalInfo}
                    suitableForInfo={p.suitableForInfo}
                    onClick={() => onClick(p)}
                  />
                ) ): ""}
          </div>
        )}
      </div>
    </>
  )
}

export default Products
