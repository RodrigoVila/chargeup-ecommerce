import { shallowEqual } from 'react-redux'

import { useAppDispatch, useAppSelector } from '@hooks'
import { closeCartModal, openCheckoutModal } from '@redux/actionCreators'
import CartProduct from '@main/CartProduct'
import CloseModalButton from '@main/Buttons/CloseModalButton'
import Button from '@main/Button'
import { colors } from '@utils/constants'
import { useEffect, useMemo } from 'react'

const CartModal = () => {
  const isOpen: boolean = useAppSelector(
    (state: StateType) => state.modal.cart,
    shallowEqual
  )

  const items: ProductType[] = useAppSelector(
    (state: StateType) => state.cart.items,
    shallowEqual
  )

  const dispatch = useAppDispatch()
  const onClose = () => dispatch(closeCartModal())

  const onSubmit = () => {
    onClose()
    dispatch(openCheckoutModal())
  }

  const getTotalSum = () => {
    return
  }

  const totalSum = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  )

  useEffect(() => {
    items.length === 0 && onClose()
  }, [items])
  
  
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } absolute inset-0 z-30 flex h-screen w-screen flex-col items-center justify-center bg-tranlucentBlack`}
    >
      <div className="relative flex w-full flex-col  items-center bg-tranlucentBlack2 md:w-2/3">
        <div className="absolute right-0 -top-12">
          <CloseModalButton color="white" position="right" onClose={onClose} />
        </div>
        {items.map((item) => (
          <CartProduct
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
        <div className="flex w-full items-center justify-between p-4 pb-0 text-3xl text-white">
          <div>Total Price</div>
          <div>{`€${totalSum}`}</div>
        </div>
        <div className="flex w-full items-center justify-between p-4 text-xl text-white md:text-3xl">
          <Button title="Checkout" color={colors.purple} onClick={onSubmit} />
        </div>
      </div>
    </div>
  )
}

export default CartModal
