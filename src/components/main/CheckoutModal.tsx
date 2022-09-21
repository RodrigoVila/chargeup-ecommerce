import { useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import { useRouter } from 'next/router'

import { useAppSelector } from '@hooks/index'
import useReduxActions from '@hooks/useReduxActions'
import CloseModalButton from '@main/Buttons/CloseModalButton'

const CheckoutModal = () => {
  const isOpen = useAppSelector((state: StateType) => state.modal.checkout, shallowEqual)

  const { closeCheckoutModal } = useReduxActions()

  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } absolute inset-0 z-40  flex h-screen w-screen flex-col items-center justify-center bg-violet-500 text-xl text-white`}
    >
      <CloseModalButton color="white" position="right" onClose={() => closeCheckoutModal()} />
      {/* Stripe needs below form in order to redirect. Cant be made with JS */}
      <form action="/api/checkout_session" method="POST">
        <button type="submit" role="link">
          Checkout
        </button>
      </form>
    </div>
  )
}

export default CheckoutModal
