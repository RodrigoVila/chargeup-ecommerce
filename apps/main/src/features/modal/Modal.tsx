import { ReactNode, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

import { BackgroundOverlay } from '~components/BackgroundOverlay'

import { Portal, CloseModalButton } from './components'

type ModalProps = {
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  className?: string
  bodyClassName?: string
  closeOnOverlayClick?: boolean
  fullScreen?: boolean
}

export const Modal = ({
  children,
  isOpen,
  onClose,
  className,
  bodyClassName,
  closeOnOverlayClick = false,
  fullScreen = false,
}: ModalProps) => {
  const fullScreenStyles = fullScreen && 'absolute inset-0 max-w-3xl mx-auto'

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isOpen])

  return isOpen ? (
    <Portal wrapperId='react-portal-modal-container'>
      <div
        onClick={closeOnOverlayClick ? onClose : undefined}
        className={twMerge(
          'fixed inset-0 z-40 flex h-full min-h-screen w-full flex-col items-center justify-center bg-transparent',
          className,
        )}
      >
        <BackgroundOverlay />
        <div
          className={twMerge(
            'relative z-50 flex w-full max-w-md flex-col items-center justify-center overflow-hidden bg-white p-6 pt-10',
            bodyClassName,
            fullScreenStyles,
          )}
        >
          <CloseModalButton
            color='black'
            className='z-70 absolute right-2 top-2'
            onClose={onClose}
          />
          {children}
        </div>
      </div>
    </Portal>
  ) : null
}
export default Modal
