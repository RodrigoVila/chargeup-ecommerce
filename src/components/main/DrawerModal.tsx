import { shallowEqual } from 'react-redux'

import { useAppSelector } from '@hooks/index'
import useReduxActions from '@hooks/useReduxActions'
import CloseModalButton from '@main/Buttons/CloseModalButton'
import Modal from '@shared/Modal'
import NavItems from './NavItems'

const DrawerModal = () => {
  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.drawer, shallowEqual)

  const { closeDrawerModal } = useReduxActions()

  return (
    <Modal isOpen={isOpen} fullScreen>
      <CloseModalButton color="black" position="left" onClose={() => closeDrawerModal()} />
      <NavItems direction="column" onClose={() => closeDrawerModal()} />
    </Modal>
  )
}

export default DrawerModal
