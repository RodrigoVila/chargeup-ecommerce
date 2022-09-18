import { shallowEqual } from 'react-redux'

import { useAppSelector, useAppDispatch } from '@hooks'
import { closeDrawerModal } from '@redux/actions'
import CloseModalButton from '@main/Buttons/CloseModalButton'
import Modal from '@shared/Modal'
import NavItems from './NavItems'

const DrawerModal = () => {
  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.drawer, shallowEqual)
  const dispatch = useAppDispatch()
  const onClose = () => dispatch(closeDrawerModal())

  return (
    <Modal isOpen={isOpen} fullScreen>
      <CloseModalButton color="black" position="left" onClose={onClose} />
      <NavItems direction="column" onClose={onClose} />
    </Modal>
  )
}

export default DrawerModal
