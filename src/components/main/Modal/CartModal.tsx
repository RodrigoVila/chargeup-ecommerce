import { RiCloseFill } from 'react-icons/ri'
import { shallowEqual } from 'react-redux'

import { useAppDispatch, useAppSelector } from '@hooks'
import { closeCartModal } from '@redux/actionCreators'
import CartFooter from '@main/CartFooter'
import HorizontalProduct from '@main/HorizontalProduct'
import CloseModalButton from '@main/Buttons/CloseModalButton'

const CartModal = () => {
  const isOpen: boolean = useAppSelector(
    (state: StateType) => state.modal.cart,
    shallowEqual
  )

  const items: ProductType[] = useAppSelector(
    (state: StateType) => state.cart.cart,
    shallowEqual
  )

  const dispatch = useAppDispatch()
  const onClose = () => dispatch(closeCartModal())

  const onSubmit = () => {
    console.log('!isOpen', isOpen)
    console.log('!items', items)
  }

  return (
    <>
      <div
        className={`${
          !isOpen && 'hidden'
        } absolute left-0 top-0 z-30  flex h-screen w-screen flex-col items-center justify-center bg-orange-300`}
      >
        <CloseModalButton color="white" position="right" onClose={onClose} />

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
