import { useState } from 'react'
import Image from 'next/image'

import { addToCart } from '@redux/actionCreators/cart'
import {
  displaySuccessMessage,
  displayInfoMessage,
} from '@redux/actionCreators/toastNotifications'

import Button from '@main/Button'
import Counter from '@main/Counter'
import RoundImage from '@main/RoundImage'
import { useAppDispatch } from '@hooks'
import { colors } from '@utils/constants'

import { AiOutlineThunderbolt, AiFillFire } from 'react-icons/ai'
import { GiBread, GiAvocado } from 'react-icons/gi'
import ProductModal from './ProductModal'

const VerticalProduct = ({
  _id,
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

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

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
      _id,
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
      {isModalOpen && (
        <ProductModal
          title={title}
          description={description}
          imgUri={imgUri}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}

      <div className="relative w-full max-w-sm mx-2 mt-32 mb-4 text-white bg-black lg:max-w-360 lg:mx-8 rounded-xl">
        <div className="px-8 pt-8 pb-4 ">
          <RoundImage imgUri={imgUri} isVertical />
          <div className="mb-4 text-base font-semibold md:text-xl">
            {title.toUpperCase()}
          </div>
          <div className="h-32 overflow-hidden text-sm md:text-lg">
            {description.slice(0, 150)}
          </div>
          <div
            className="font-semibold text-purple-700 cursor-pointer"
            onClick={openModal}
          >
            {/* Next space is ok */} ... ver mas.
          </div>
          <div className="flex flex-col my-4 text-sm md:text-base">
            <div className="mb-4">Info Nutricional:</div>
            <div className="flex items-center justify-around text-lg">
              <div className="flex items-center justify-center mr-4 ">
                <AiFillFire size={35} />
                <div className="ml-1 text-center">
                  {nutritionalInfo.calories}
                </div>
              </div>
              <div className="flex items-center justify-center mr-4">
                <GiBread size={35} />
                <div className="ml-1 text-center">{nutritionalInfo.carbs}</div>
              </div>
              <div className="flex items-center justify-center mr-4">
                <AiOutlineThunderbolt size={35} />
                <div className="ml-1 text-center">
                  {nutritionalInfo.protein}
                </div>
              </div>
              <div className="flex items-center justify-center mr-4">
                <GiAvocado size={35} />
                <div className="ml-1 text-center">{nutritionalInfo.fat}</div>
              </div>
            </div>
          </div>
          <div className="flex mt-8 text-sm font-semibold md:text-base">
            {suitableForInfo.vegan && <div className="">Vg</div>}
            {suitableForInfo.protein && <div className="">Pr</div>}
            {suitableForInfo.glutenFree && <div className="">GF</div>}
            {suitableForInfo.keto && <div className="">Kt</div>}
          </div>
          <div className="flex justify-end">
            <div className="my-2 text-2xl font-semibold md:text-4xl">{`€${price}`}</div>
          </div>
        </div>
        <div className="flex items-center justify-center mx-4 mb-4">
          <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
          <Button
            title="Agregar"
            color={colors.purple}
            onClick={addItemToCart}
          />
        </div>
      </div>
    </>
  )
}

export default VerticalProduct
