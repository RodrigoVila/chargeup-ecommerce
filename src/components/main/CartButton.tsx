import React from 'react'
import { shallowEqual } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'

import { openCartModal } from '@redux/actionCreators'
import { useAppDispatch, useAppSelector } from '@hooks'

const CartButton = () => {
  const dispatch = useAppDispatch()
  const openCart = () => dispatch(openCartModal())

  const cartLength: CartStateType = useAppSelector(
    (state: any) => state.cart.cart.length,
    shallowEqual
  )

  return (
    <div
      className="relative z-20 m-2 mr-4 h-8 w-8 md:m-4"
      onClick={openCart}
    >
      <FiShoppingCart color={'white'} size={30} />
      {cartLength !== 0 && (
        <div
          className={`absolute -right-2 -top-1 rounded-full bg-danger px-1 text-sm font-bold text-white`}
        >
          {cartLength}
        </div>
      )}
    </div>
  )
}

export default CartButton
