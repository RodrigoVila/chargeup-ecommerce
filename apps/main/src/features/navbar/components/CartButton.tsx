import { useMemo } from 'react'
import Image from 'next/legacy/image'
import cartImg from '@packages/assets/images/cart_white.svg'

import { useAppActions, useAppSelector } from '~hooks'

export const CartButton = () => {
  const { cartItems } = useAppSelector()
  const { openCartModal, displayInfoMessage } = useAppActions()

  const cartLength = useMemo(() => cartItems?.length ?? 0, [cartItems])

  const openCart = () =>
    cartLength > 0 ? openCartModal() : displayInfoMessage('No hay productos en el carrito')

  return (
    <div className={`relative mx-2 cursor-pointer`}>
      <button
        className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10'
        onClick={openCart}
      >
        <Image
          className='text-white'
          src={cartImg}
          alt='Cart Icon'
          // fill
          sizes='(max-width: 768px) 100vw, 50vw'
        />
      </button>
      {cartLength > 0 && (
        <div
          className={`absolute -right-2 -top-1 m-auto rounded-full bg-red-500 px-1 text-center text-sm font-bold leading-none text-white`}
        >
          {cartLength}
        </div>
      )}
    </div>
  )
}
