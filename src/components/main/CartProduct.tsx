import { useState, useEffect } from 'react'
import Image from 'next/image'

import { removeFromCart } from '@redux/actionCreators/cart'
import RoundImage from '@main/RoundImage'
import Counter from '@main/Counter'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useAppDispatch } from '@hooks'

const CartProduct = ({
  id,
  title,
  description,
  nutritionalInfo,
  suitableForInfo,
  price,
  quantity,
  imgUri,
}: ProductType) => {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(0)

  const removeItem = () => {
    //TODO: FIX Type
    dispatch(removeFromCart(id))
  }

  const borderStyle = ''

  return (
    <div className="flex w-full bg-tranlucentBlack2 text-white">
      <div className={`relative  h-full w-2/3 border-b-2 border-white`}>
        <Image
          className=""
          objectFit="cover"
          layout="fill"
          src="/brownies.jpg"
          alt=""
        />
      </div>
      <div className={` relative w-full flex-col border-b-2 border-white `}>
        <div className="ml-2 mb-2 text-xl font-semibold">
          {title.toUpperCase()}
        </div>
        <div className="relative mx-2 mt-6 mb-4 flex justify-between">
          <div className="h-full text-xl text-gray-300">{`€${price} - ${quantity} units.`}</div>
          <div className="h-full text-xl text-gray-300">{`€${
            price * quantity
          }`}</div>
        </div>
        <div
          className="absolute  top-2 right-2 z-20 flex cursor-pointer items-center"
          onClick={removeItem}
        >
          <FaRegTrashAlt color="red" size={22} />
        </div>
      </div>
    </div>
  )
}

export default CartProduct
