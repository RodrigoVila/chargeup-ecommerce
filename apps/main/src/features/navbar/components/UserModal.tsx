import { useAppActions, useAppSelector } from '~hooks'
import { Modal } from '~features/modal'

import { UserDetails } from './UserDetails'

export const UserModal = () => {
  const { isUserModalOpen } = useAppSelector()
  const { closeUserModal } = useAppActions()
  return (
    <Modal isOpen={isUserModalOpen} onClose={closeUserModal} bodyClassName='max-h-[95%]'>
      <UserDetails />
    </Modal>
  )
}
