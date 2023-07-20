import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import { useAppActions } from '~hooks'
import { CartProductType } from '~types'
import { Counter } from '~components/Counter'

type CartProductProps = {
  product: CartProductType
}

export const CartProduct = ({ product }: CartProductProps) => {
  const [isEditingQuantity, setEditingQuantity] = useState(false)

  const { removeFromCart, changeCartProductQuantity } = useAppActions()

  const { id, title, quantity, selectedSize, selectedExtras, subTotal, total } = product
  const { label: sizeLabel, price } = selectedSize

  const toggleEdit = () => setEditingQuantity(!isEditingQuantity)

  const addOne = () => changeCartProductQuantity(id, quantity + 1)
  const subOne = () => {
    if (quantity < 1) return
    changeCartProductQuantity(id, quantity - 1)
  }

  return (
    <div className="flex w-full mt-1">
      <div className={`relative flex w-full flex-col justify-between border-b-2 border-gray-300`}>
        <div className="flex items-center justify-between mx-2">
          <div className="mt-2 text-lg font-semibold">{title.toUpperCase()}</div>
          <button className="w-6 h-6 cursor-pointer" onClick={() => removeFromCart(id)}>
            <TrashIcon color="red" />
          </button>
        </div>
        <div className="flex items-center justify-between mx-2">
          <div className="">
            {sizeLabel && <div className="">{`${sizeLabel} - €${price.toFixed(2)}`}</div>}
            {selectedExtras.length > 0 &&
              selectedExtras.map((extra, index) => (
                <div key={index} className="">{`${extra.label} - €${extra.price.toFixed(2)}`}</div>
              ))}
            {isEditingQuantity ? (
              <div className="flex items-center">
                <Counter count={quantity} addOne={addOne} subtractOne={subOne} />
                <button
                  className="p-2 ml-2 border-2 border-black rounded-lg cursor-pointer"
                  onClick={toggleEdit}
                >
                  OK
                </button>
              </div>
            ) : (
              <div className="mt-2 font-bold">
                Subtotal:
                <div className="flex items-center font-regular">
                  <p>{`€${subTotal.toFixed(2)} x ${quantity} ${
                    quantity > 1 ? 'unidades' : 'unidad'
                  }`}</p>
                  <button className="w-5 h-5 ml-2 cursor-pointer" onClick={toggleEdit}>
                    <PencilIcon color="black" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-end justify-center h-full text-2xl text-gray-700">{`€${total.toFixed(
            2,
          )}`}</div>
        </div>
      </div>
    </div>
  )
}
