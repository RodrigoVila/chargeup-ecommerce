import { useEffect } from 'react'

import { colors } from '@constants'
import Portal from '@utils/Portal'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  fullScreen?: boolean
}

const Modal = ({ children, isOpen, fullScreen = false }: Props) => {
  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isOpen])

  return isOpen ? (
    <Portal wrapperId="react-portal-modal-container">
      <div
        className={`fixed inset-0 bg-[${
          fullScreen ? colors.white : colors.overlay
        }] z-40 flex flex-col items-center justify-center overflow-scroll px-5 pb-5 transition-all`}
      >
        <div className="max-w-4xl rounded-lg bg-white">{children}</div>
      </div>
    </Portal>
  ) : null
}
export default Modal
