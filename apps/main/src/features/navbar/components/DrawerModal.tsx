import { useAppActions, useAppSelector } from '~hooks'

import { Modal } from '~features/modal'

import { NavItems } from './NavItems'

export const DrawerModal = () => {
  const { isDrawerModalOpen } = useAppSelector()

  const { closeDrawerModal } = useAppActions()

  return (
    <Modal isOpen={isDrawerModalOpen} onClose={closeDrawerModal}>
      <NavItems direction="column" onClose={() => closeDrawerModal()} />
    </Modal>
  )
}
