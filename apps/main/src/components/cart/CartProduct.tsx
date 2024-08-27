import { FaRegTrashAlt } from 'react-icons/fa'
import { GoPencil } from 'react-icons/go'
import { useState } from 'react'

import { useAppActions } from '~hooks'
import { CartProductType } from '@packages/types'
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
    <div className='mt-1 flex w-full'>
      <div className={`relative flex w-full flex-col justify-between border-b-2 border-gray-300`}>
        <div className='mx-2 flex items-center justify-between'>
          <div className='mt-2 text-lg font-semibold'>{title.toUpperCase()}</div>
          <button className='h-6 w-6 cursor-pointer' onClick={() => removeFromCart(id)}>
            <FaRegTrashAlt color='red' />
          </button>
        </div>
        <div className='mx-2 flex items-center justify-between'>
          <div className=''>
            {sizeLabel && <div className=''>{`${sizeLabel} - €${price.toFixed(2)}`}</div>}
            {/* TODO: For some reason TS don't let me use optional chaining here */}
            {selectedExtras &&
              selectedExtras.length > 0 &&
              selectedExtras.map((extra, index) => (
                <div key={index} className=''>{`${extra.label} - €${extra.price.toFixed(2)}`}</div>
              ))}
            {isEditingQuantity ? (
              <div className='flex items-center'>
                <Counter count={quantity} addOne={addOne} subtractOne={subOne} />
                <button
                  className='ml-2 cursor-pointer rounded-lg border-2 border-black p-2'
                  onClick={toggleEdit}
                >
                  OK
                </button>
              </div>
            ) : (
              <div className='mt-2 font-bold'>
                Subtotal:
                <div className='font-regular flex items-center'>
                  <p>{`€${subTotal?.toFixed(2)} x ${quantity} ${
                    quantity > 1 ? 'unidades' : 'unidad'
                  }`}</p>
                  <button className='ml-2 h-5 w-5 cursor-pointer' onClick={toggleEdit}>
                    <GoPencil color='black' />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className='flex h-full items-end justify-center text-2xl text-gray-700'>{`€${total?.toFixed(
            2,
          )}`}</div>
        </div>
      </div>
    </div>
  )
}
