import { FaRegUser } from 'react-icons/fa'

import { AbsoluteModalClose, Modal, ModalContent, ModalTrigger } from '@packages/modal'

import { useAppSelector } from '~hooks'

import { UserDetails } from './UserDetails'

export const UserModal = () => {
  const { userLogin } = useAppSelector()
  return (
    <Modal>
      <ModalTrigger>
        <div className='flex flex-col items-center'>
          <FaRegUser size={userLogin?.name ? 24 : 36} />
          {userLogin?.name}
        </div>
      </ModalTrigger>
      <ModalContent className='relative flex max-h-[70%] w-full flex-col'>
        <UserDetails />
      </ModalContent>
    </Modal>
  )
}
