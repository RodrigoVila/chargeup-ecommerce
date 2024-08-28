import { FaRegUser } from 'react-icons/fa'
import { useIntl } from 'react-intl'

import { AbsoluteModalClose, Modal, ModalContent, ModalTrigger } from '@packages/modal'

import { useAppSelector } from '~hooks'

import { UserDetails } from './UserDetails'

export const UserModal = () => {
  const { userLogin } = useAppSelector()
  const { formatMessage } = useIntl()
  return (
    <Modal>
      <ModalTrigger>
        <div className='flex flex-col items-center'>
          <FaRegUser size={24} />
          {userLogin?.name ? userLogin.name : formatMessage({ id: 'LOGIN' })}
        </div>
      </ModalTrigger>
      <ModalContent className='relative my-4 flex max-h-[70%] w-full flex-col p-4'>
        <AbsoluteModalClose />
        <UserDetails />
      </ModalContent>
    </Modal>
  )
}
