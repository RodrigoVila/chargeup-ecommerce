import { useEffect } from 'react'
import { shallowEqual } from 'react-redux'

import { useAppDispatch, useAppSelector } from '@hooks'
import {
  createCheckoutSession,
  closeCheckoutModal,
} from '@redux/actionCreators'
import CloseModalButton from '@main/Buttons/CloseModalButton'

const CheckoutModal = () => {
  const isOpen = useAppSelector(
    (state: StateType) => state.modal.checkout,
    shallowEqual
  )
  const dispatch = useAppDispatch()
  const onCheckout = () => dispatch(createCheckoutSession())
  const onClose = () => dispatch(closeCheckoutModal())

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      )
    }
  }, [])
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } absolute inset-0 z-40  flex h-screen w-screen flex-col items-center justify-center bg-orange-300`}
    >
      <CloseModalButton color="white" position="right" onClose={onClose} />
    </div>
  )
}

export default CheckoutModal
