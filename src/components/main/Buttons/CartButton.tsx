import { useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'

import { openCartModal, displayInfoMessage } from '@redux/actions'
import { useAppDispatch, useAppSelector } from '@hooks'

const CartButton = () => {
  const dispatch = useAppDispatch()

  const cartLength: number = useAppSelector(
    (state: StateType) => state.cart.items.length,
    shallowEqual
  )
  const openCart = () =>
    cartLength > 0
      ? dispatch(openCartModal())
      : dispatch(displayInfoMessage('No hay productos en el carrito'))

  return (
    <button
      className="relative m-2 mr-4 h-8 w-8 cursor-pointer md:m-4 z-20"
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
    </button>
  )
}

export default CartButton
