import { shallowEqual } from 'react-redux'

import { useAppSelector, useAppDispatch } from '@hooks'
import { closeDrawerRModal } from '@redux/actions'
import CloseModalButton from '@main/Buttons/CloseModalButton'
import Modal from 'components/shared/Modal'

const DrawerModal = () => {
  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.drawer, shallowEqual)
  const dispatch = useAppDispatch()
  const onClose = () => dispatch(closeDrawerRModal())

  return (
    <Modal isOpen={isOpen} fullScreen>
      <CloseModalButton color="black" position="left" onClose={onClose} />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <a className="my-1 text-xl font-semibold" onClick={(e) => e.stopPropagation()} href="#">
          Home
        </a>
        <a className="my-1 text-xl font-semibold" href="#" onClick={(e) => e.stopPropagation()}>
          ABOUT US
        </a>
        <a className="my-1 text-xl font-semibold" href="#" onClick={(e) => e.stopPropagation()}>
          PRODUCTOS
        </a>
        <a className="my-1 text-xl font-semibold" href="#" onClick={(e) => e.stopPropagation()}>
          QUE ES KETO
        </a>
        <a className="my-1 text-xl font-semibold" href="#" onClick={(e) => e.stopPropagation()}>
          COMO COMPRAR
        </a>
        <a className="my-1 text-xl font-semibold" href="#" onClick={(e) => e.stopPropagation()}>
          BLOG
        </a>
        <a className="my-1 text-xl font-semibold" href="#" onClick={(e) => e.stopPropagation()}>
          CONTACTO
        </a>
      </div>
    </Modal>
  )
}

export default DrawerModal
