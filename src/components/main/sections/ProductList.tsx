import { FC, useState, useEffect } from 'react'

import Product from '@main/Product'
import SearchBar from '@main/SearchBar'
import { useAppDispatch, useAppSelector } from '@hooks'
import { fetchProducts, openProductDetailModal } from '@redux/actionCreators'
import ProductModal from '@main/ProductModal'

const ProductList: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const [selected, setSelected] = useState<ProductType | null>(null)
  const [filteredProducts, setFilteredProducts] = useState([])

  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)

  const onClick = (product: ProductType) => {
    setSelected(product)
    dispatch(openProductDetailModal())
  }

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
      {products.length > 0 && (
        <div className="h-full min-h-screen w-full bg-[url('/purpleTexture.svg')] bg-cover bg-center bg-no-repeat pt-4">
          <SearchBar setSearchValue={setSearchValue} />

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
              : products?.map((p) => (
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
                ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ProductList
