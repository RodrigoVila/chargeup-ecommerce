import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlineThunderbolt, AiFillFire } from 'react-icons/ai'
import { GiBread, GiAvocado } from 'react-icons/gi'

import { addToCart } from '@redux/actionCreators/cart'
import { displaySuccessMessage, displayInfoMessage } from '@redux/actionCreators/toastNotifications'
import { useAppDispatch } from '@hooks'

import Button from '@main/Button'
import Counter from '@main/Counter'
import RoundImage from '@main/RoundImage'
import { colors } from '@utils/constants'
import ProductModal from './ProductModal'
import { openProductDetailModal } from '@redux/actionCreators'

const Product = ({
  id,
  title,
  description,
  nutritionalInfo,
  suitableForInfo,
  price,
  imgUri,
}: ProductType) => {
  const [count, setCount] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
  const dispatch = useAppDispatch()

  const openModal = () => dispatch(openProductDetailModal())

  const addOne = () => setCount((prevCount) => prevCount + 1)

  const subtractOne = () => {
    if (count < 1) return 0
    setCount((prevCount) => prevCount - 1)
  }

  const addItemToCart = () => {
    if (count === 0) {
      dispatch(displayInfoMessage('Cantidad tiene que ser mayor a 0'))
      return
    }
    const item: ProductType = {
      id,
      title,
      description,
      nutritionalInfo,
      suitableForInfo,
      price,
      imgUri,
      quantity: count,
    }
    dispatch(addToCart(item))
    dispatch(displaySuccessMessage('Producto agregado!'))
  }

  return (
    <>
      <ProductModal title={title} description={description} imgUri={imgUri} />

      <div className="relative mx-2 mt-32 mb-4 w-full max-w-sm rounded-xl bg-black text-white lg:mx-8 lg:max-w-360">
        <div className="px-8 pt-8 pb-4 ">
          {imgUri && <RoundImage imgUri={imgUri} />}
          <div className="mb-4 text-base font-semibold md:text-xl">{title.toUpperCase()}</div>
          <div className="cursor-pointer text-sm line-clamp-4 md:text-lg" onClick={openModal}>
            {description}
          </div>
          <div className="cursor-pointer font-semibold text-purple-700" onClick={openModal}>
            ver mas.
          </div>
          <div className="my-4 flex flex-col text-sm md:text-base">
            <div className="mb-4">Info Nutricional:</div>
            <div className="flex items-center justify-around text-lg">
              <div className="mr-4 flex items-center justify-center ">
                <AiFillFire size={35} />
                <div className="ml-1 text-center">{nutritionalInfo.calories}</div>
              </div>
              <div className="mr-4 flex items-center justify-center">
                <GiBread size={35} />
                <div className="ml-1 text-center">{nutritionalInfo.carbs}</div>
              </div>
              <div className="mr-4 flex items-center justify-center">
                <AiOutlineThunderbolt size={35} />
                <div className="ml-1 text-center">{nutritionalInfo.protein}</div>
              </div>
              <div className="mr-4 flex items-center justify-center">
                <GiAvocado size={35} />
                <div className="ml-1 text-center">{nutritionalInfo.fat}</div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex text-sm font-semibold md:text-base">
            {suitableForInfo.vegan && (
              <div className="relative h-10 w-10">
                <Image src="/icons/vegan.svg" layout="fill" />
              </div>
            )}
            {suitableForInfo.protein && (
              <div className="relative h-10 w-10">
                <Image src="/icons/high-protein.svg" layout="fill" />
              </div>
            )}
            {suitableForInfo.glutenFree && (
              <div className="relative h-10 w-10">
                <Image src="/icons/gluten-free.svg" layout="fill" />
              </div>
            )}
            {suitableForInfo.keto && (
              <div className="relative h-10 w-10">
                <Image src="/icons/keto.svg" layout="fill" />
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <div className="my-2 text-2xl font-semibold md:text-4xl">{`€${price}`}</div>
          </div>
        </div>
        <div className="mx-4 mb-4 flex items-center justify-center">
          <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
          <Button title="Agregar" color={colors.purple} onClick={addItemToCart} />
        </div>
      </div>
    </>
  )
}

export default Product
