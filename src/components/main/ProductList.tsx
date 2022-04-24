import { FC, useState, useEffect } from 'react'

import VerticalProduct from '@main/VerticalProduct'
import SearchBar from '@main/SearchBar'
import { useAppDispatch, useAppSelector } from '@hooks'
import { fetchProducts } from '@redux/actionCreators'

const ProductList: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    const filter = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    )
    searchValue.length > 1
      ? setFilteredProducts(filter)
      : setFilteredProducts([])
  }, [searchValue])

  useEffect(() => {
    console.log('!filteredProducts', filteredProducts)
  }, [filteredProducts])

  return (
    products.length > 0 && (
      <div className="w-full h-full pt-4 bg-center bg-no-repeat bg-cover bg-[url('/purpleTexture.svg')]">
        <SearchBar setSearchValue={setSearchValue} />

        <div className="relative flex flex-wrap justify-center w-full mx-auto ">
          {filteredProducts.length > 0
            ? filteredProducts?.map((p, index) => (
                <VerticalProduct
                  key={index}
                  id={p.id}
                  title={p.title}
                  description={p.description}
                  price={p.price}
                  quantity={p.quantity}
                  imgUri={p.imgUri}
                  nutritionalInfo={p.nutritionalInfo}
                  suitableForInfo={p.suitableForInfo}
                />
              ))
            : products?.map((p, index) => (
                <VerticalProduct
                  key={index}
                  id={p.id}
                  title={p.title}
                  description={p.description}
                  price={p.price}
                  quantity={p.quantity}
                  imgUri={p.imgUri}
                  nutritionalInfo={p.nutritionalInfo}
                  suitableForInfo={p.suitableForInfo}
                />
              ))}
        </div>
      </div>
    )
  )
}

export default ProductList
