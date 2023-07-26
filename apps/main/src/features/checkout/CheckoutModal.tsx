import { useAppActions, useAppSelector } from '~hooks'
import { Modal } from '~features/modal'

export const CheckoutModal = () => {
  const { isCheckoutModalOpen, checkoutSession } = useAppSelector()

  const { closeCheckoutModal } = useAppActions()

  return (
    <Modal isOpen={isCheckoutModalOpen} onClose={closeCheckoutModal}>
      <div className='mb-6 px-16'>
        {checkoutSession ? <iframe src={checkoutSession} title='description'></iframe> : null}
      </div>
    </Modal>
  )
}
