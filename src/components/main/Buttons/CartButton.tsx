import { useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'

import useReduxActions from '@hooks/useReduxActions'
import { useAppSelector } from '@hooks/index'

const CartButton = () => {
  const cartLength: number = useAppSelector(
    (state: StateType) => state.cart.items.length,
    shallowEqual
  )
  const { openCartModal, displayInfoMessage } = useReduxActions()

  const openCart = () =>
    cartLength > 0 ? openCartModal() : displayInfoMessage('No hay productos en el carrito')

  return (
    <button className="relative z-20 m-2 mr-4 h-8 w-8 cursor-pointer md:m-4" onClick={openCart}>
      <FiShoppingCart color={'white'} size={30} />
      {cartLength !== 0 && (
        <div
          className={`absolute -right-2 -top-1 m-auto rounded-full bg-red-500 px-1 text-center text-sm font-bold leading-none text-white`}
        >
          {cartLength}
        </div>
      )}
    </button>
  )
}

export default CartButton
