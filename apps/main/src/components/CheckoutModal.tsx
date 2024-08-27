import { useAppSelector } from '~hooks'
import { Modal, ModalContent } from '@packages/modal'
import { useState } from 'react'

export const CheckoutModal = () => {
  const [isOpen, setOpen] = useState(false)
  const { checkoutSession } = useAppSelector()

  return (
    <Modal open={isOpen} onOpenChange={setOpen}>
      <ModalContent>
        <div className='mb-6 px-16'>
          {checkoutSession ? <iframe src={checkoutSession} title='description'></iframe> : null}
        </div>
      </ModalContent>
    </Modal>
  )
}
