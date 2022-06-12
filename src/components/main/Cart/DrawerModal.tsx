import { shallowEqual } from 'react-redux'

import { useAppSelector, useAppDispatch } from '@hooks'
import { closeDrawerRModal } from '@redux/actions'
import CloseModalButton from '@main/Buttons/CloseModalButton'

const DrawerModal = () => {
  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.drawer, shallowEqual)
  const dispatch = useAppDispatch()
  const onClose = () => dispatch(closeDrawerRModal())

  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } absolute left-0 top-0 z-30  flex h-screen w-screen flex-col items-center justify-center bg-purple-300`}
    >
      <CloseModalButton color="white" position="left" onClose={onClose} />

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
  )
}

export default DrawerModal
