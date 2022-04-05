import { FC, useState, useEffect } from 'react'
import axios from 'axios'
import { shallowEqual, useSelector } from 'react-redux'

import VerticalProduct from '@main/VerticalProduct'
import SearchBar from '@main/SearchBar'

const ProductList: FC = () => {
  const [isLoading, setLoading] = useState(false)

  const products: ProductType[] = useSelector(
    (state: StateType) => state.products.products,
    shallowEqual
  )

  useEffect(() => {
    console.log('!products', products)
  }, [products])

  // useEffect(() => {
  //   axios
  //     .get("/api/products")
  //     .then((data) => console.log("!data", data))
  //     .catch((e) => console.error("!err", e));
  // }, []);

  return (
    <div className="w-full h-full pt-4 bg-center bg-no-repeat bg-cover bg-[url('/purpleTexture.svg')]">
      <SearchBar />

      <div className="relative flex flex-wrap justify-center w-full mx-auto ">
        {products?.map((p, index) => (
          <VerticalProduct
            key={index}
            _id={p._id}
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
