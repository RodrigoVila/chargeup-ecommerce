import { useState } from 'react'
import Image from 'next/image'
import { FaRegTrashAlt } from 'react-icons/fa'

import useReduxActions from '@hooks/useReduxActions'

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
  const [count, setCount] = useState(0)

  const { removeFromCart } = useReduxActions()

  return (
    <div className="flex w-full">
      <div className="relative h-28 w-1/3 border-b-2 border-white">
        <Image className="" objectFit="cover" layout="fill" src={`/${imgUri}.jpg`} alt="" />
      </div>
      <div className={`relative flex w-full flex-col justify-between border-b-2 border-gray-300`}>
        <div className="mx-2 flex items-center justify-between">
          <div className="text-lg font-semibold">{title.toUpperCase()}</div>
          <div className="cursor-pointer" onClick={() => removeFromCart(id)}>
            <FaRegTrashAlt color="red" size={22} />
          </div>
        </div>
        <div className="ml-2 flex">
          {suitableForInfo.vegan && (
            <div className="relative h-10 w-10" data-tip="Apto Vegano">
              <Image src="/icons/vegan.svg" layout="fill" />
            </div>
          )}
          {suitableForInfo.protein && (
            <div className="relative h-10 w-10" data-tip="Alto contenido de proteina">
              <Image src="/icons/high-protein.svg" layout="fill" />
            </div>
          )}
          {suitableForInfo.glutenFree && (
            <div className="relative h-10 w-10" data-tip="Gluten Free">
              <Image src="/icons/gluten-free.svg" layout="fill" />
            </div>
          )}
          {suitableForInfo.keto && (
            <div className="relative h-10 w-10" data-tip="Keto">
              <Image src="/icons/keto.svg" layout="fill" />
            </div>
          )}
        </div>

        <div className="relative mx-2 flex justify-between">
          <div className="h-full text-xl text-gray-700">{`€${price} - ${quantity} ${
            quantity === 1 ? 'unidad' : 'unidades'
          }.`}</div>
          <div className="h-full text-xl text-gray-700">{`€${price * quantity}`}</div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
