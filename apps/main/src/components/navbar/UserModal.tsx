import { Modal, ModalContent, ModalTrigger } from '@packages/modal'

import { UserDetails } from './UserDetails'
import { UserButton } from './UserButton'
import { useState } from 'react'

export const UserModal = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Modal open={isOpen} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <UserButton />
      </ModalTrigger>
      <ModalContent>
        <UserDetails />
      </ModalContent>
    </Modal>
  )
}
