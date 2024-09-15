import { useEffect, useState } from 'react'

import { AbsoluteModalClose, Modal, ModalContent, ModalTrigger } from '@packages/modal'

import { LoginDetails } from '~components/navbar/LoginDetails'
import { FaRegUser } from 'react-icons/fa'

export const LoginModal = () => {
  return (
    <Modal>
      <ModalTrigger>
        <div className='flex flex-col items-center'>
          <FaRegUser size={24} />
          Login
        </div>
      </ModalTrigger>
      <ModalContent className='relative flex w-full flex-col'>
        <LoginDetails />
      </ModalContent>
    </Modal>
  )
}
