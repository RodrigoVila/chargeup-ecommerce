import { useEffect,ReactNode } from 'react';

import { colors } from '@constants/colors';
import Portal from '@utils/Portal';
import BackgroundOverlay from '@main/BackgroundOverlay';
import useAppActions from '@hooks/useAppActions';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  transparent?: boolean;
  fullScreen?: boolean;
  closeOnOverlayClick?: boolean;
}

const Modal = ({
  children,
  isOpen,
  transparent,
  fullScreen = false,
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
        className={`${transparent ? 'bg-transparent' : 'bg-white'} ${
          fullScreen
            ? 'inset-0 items-center justify-center'
            : 'top-20 items-center justify-center'
        } fixed z-40 flex flex-col min-h-screen h-full w-full`}
      >
        {transparent && <BackgroundOverlay />}
        <div className="z-50 flex flex-col items-center justify-center w-full max-w-md px-6 overflow-hidden">{children}</div>
      </div>
    </Portal>
  ) : null;
};
export default Modal;
