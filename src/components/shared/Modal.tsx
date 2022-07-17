import { useEffect } from 'react'

import { colors } from '@constants'
import Portal from '@utils/Portal'
import { useAppDispatch } from '@hooks'
import { closeFiltersModal } from '@redux/actions'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  transparent?: boolean
  fullScreen?: boolean
  closeOnOverlayClick?: boolean
}

const Modal = ({
  children,
  isOpen,
  transparent,
  fullScreen = false,
  closeOnOverlayClick = false,
}: Props) => {
  const dispatch = useAppDispatch()
  const closeModal = () => {
    dispatch(closeFiltersModal())
  }
  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isOpen])

  return isOpen ? (
    <Portal wrapperId="react-portal-modal-container">
      <div
        onClick={closeOnOverlayClick ? closeModal : undefined}
        className={`${
          fullScreen ? 'inset-0 items-center justify-center' : 'top-20 items-start justify-start'
        } fixed z-40 flex flex-col`}
      >
        <div className={`mx-2 max-w-4xl bg-white`}>{children}</div>
      </div>
    </Portal>
  ) : null
}
export default Modal
