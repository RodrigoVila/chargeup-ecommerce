import { useEffect } from 'react'

import { colors } from '@constants'
import Portal from '@utils/Portal'
import { useAppDispatch } from '@hooks'
import { closeDrawerModal } from '@redux/actions'
import BackgroundOverlay from '@main/BackgroundOverlay'

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
    dispatch(closeDrawerModal())
  }
  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isOpen])

  return isOpen ? (
    <Portal wrapperId="react-portal-modal-container">
      <div
        onClick={closeOnOverlayClick ? closeModal : undefined}
        className={`${
          fullScreen
            ? 'inset-0 items-center justify-center bg-white'
            : 'top-20 items-start justify-start'
        } fixed z-40 flex flex-col ${transparent ? 'bg-transparent' : 'bg-white'}`}
      >
        {transparent && <BackgroundOverlay color={colors.overlay} />}
        <div className={`mx-2 max-w-4xl bg-white z-10`}>{children}</div>
      </div>
    </Portal>
  ) : null
}
export default Modal
