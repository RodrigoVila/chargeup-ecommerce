import { ReactNode, useEffect } from 'react';

import useAppActions from '@hooks/useAppActions';
import BackgroundOverlay from '@main/BackgroundOverlay';
import Portal from '@utils/Portal';
import { twMerge } from 'tailwind-merge';
import CloseModalButton from './Buttons/CloseModalButton';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  bodyClassName?: string;
  closeOnOverlayClick?: boolean;
  fullScreen?: boolean;
}

const Modal = ({
  children,
  isOpen,
  onClose,
  className,
  bodyClassName,
  closeOnOverlayClick = false,
  fullScreen = false,
}: Props) => {
  const { closeDrawerModal } = useAppActions();

  const fullScreenStyles = fullScreen && 'absolute inset-0 max-w-3xl mx-auto';

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return isOpen ? (
    <Portal wrapperId="react-portal-modal-container">
      <div
        onClick={closeOnOverlayClick ? closeDrawerModal : undefined}
        className={twMerge(
          'bg-transparent inset-0 items-center justify-center fixed z-40 flex flex-col min-h-screen h-full w-full',
          className
        )}
      >
        <BackgroundOverlay />
        <div
          className={twMerge(
            'bg-white z-50 flex flex-col items-center justify-center w-full max-w-md p-6 pt-10 overflow-hidden relative',
            bodyClassName,
            fullScreenStyles
          )}
        >
          <CloseModalButton
            color="black"
            className="absolute right-2 top-2 z-70"
            onClose={onClose}
          />
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};
export default Modal;
