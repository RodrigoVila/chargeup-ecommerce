import { useEffect, ReactNode } from 'react';

import Portal from '@utils/Portal';
import BackgroundOverlay from '@main/BackgroundOverlay';
import useAppActions from '@hooks/useAppActions';
import { twMerge } from 'tailwind-merge';
import CloseModalButton from './Buttons/CloseModalButton';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  bodyClassName?: string;
  closeOnOverlayClick?: boolean;
}

const Modal = ({
  children,
  isOpen,
  onClose,
  className,
  bodyClassName,
  closeOnOverlayClick = false,
}: Props) => {
  const { closeDrawerModal } = useAppActions();

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
            bodyClassName
          )}
        >
          <CloseModalButton color="black" className="absolute right-2 top-2 z-70" onClose={onClose} />
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};
export default Modal;
