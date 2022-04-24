import { useEffect, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { shallowEqual } from 'react-redux'

import CartFooter from '@main/CartFooter'
import HorizontalProduct from './HorizontalProduct'
import { useAppSelector } from '@hooks'

interface Props {
  items: ProductType[]
}

const CartModal = ({ items }: Props) => {
  const isOpen: ModalStateType = useAppSelector(
    (state: any) => state.modal.cart,
    shallowEqual
  )
  const onSubmit = () => {
    console.log('!isOpen', isOpen)
  }

  return (
    <>
      <div
        className={`${
          !isOpen && 'hidden'
        } absolute left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-center overflow-y-auto bg-wooden bg-cover bg-center bg-no-repeat pt-16`}
      >
        <div
          className="absolute top-0 right-0 z-20 m-2 cursor-pointer"
          onClick={() => {}}
        >
          <RiCloseFill color="white" size={45} />
        </div>

        <div className="flex w-full flex-1 flex-col items-center">
          {items.map((item) => (
            <HorizontalProduct
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              nutritionalInfo={item.nutritionalInfo}
              suitableForInfo={item.suitableForInfo}
              price={item.price}
              quantity={item.quantity}
              imgUri={item.imgUri}
            />
          ))}
        </div>
        <CartFooter onSubmit={onSubmit} />
      </div>
    </>
  )
}

export default CartModal
