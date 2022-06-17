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
        className={`fixed inset-0 bg-[${
          fullScreen ? colors.white : colors.overlay
        }] z-40 flex flex-col items-center justify-center overflow-scroll px-5 pb-5 transition-all`}
      >
        <div className={`${transparent ? 'bg-transparent' : 'bg-white'} max-w-4xl rounded-lg`}>
          {children}
        </div>
      </div>
    </Portal>
  ) : null
}
export default Modal
