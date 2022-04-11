import { FC, useState, useEffect } from 'react'

import VerticalProduct from '@main/VerticalProduct'
import SearchBar from '@main/SearchBar'
import { useAppDispatch, useAppSelector } from '@hooks'
import { fetchProducts } from '@redux/actions'

const ProductList: FC = () => {
  const [isLoading, setLoading] = useState(false)

  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)

  useEffect(() => {
    console.log('!aaproducts', products)
  }, [products])

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="w-full h-full pt-4 bg-center bg-no-repeat bg-cover bg-[url('/purpleTexture.svg')]">
      <SearchBar />

      <div className="relative flex flex-wrap justify-center w-full mx-auto ">
        {products?.map((p, index) => (
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
}

export default ProductList
