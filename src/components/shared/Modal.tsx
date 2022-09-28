import { useEffect } from 'react';

import { colors } from '@constants';
import Portal from '@utils/Portal';
import BackgroundOverlay from '@main/BackgroundOverlay';
import useAppActions from '@hooks/useAppActions';

interface Props {
  children: React.ReactNode;
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
        className={` ${transparent ? 'bg-transparent' : 'bg-white'} ${
          fullScreen
            ? 'inset-0 items-center justify-center bg-white'
            : 'top-20 items-start justify-start'
        } fixed z-40 flex flex-col min-h-screen`}
      >
        {transparent && <BackgroundOverlay color={colors.overlay} />}
        <div className={`z-50 w-full overflow-scroll`}>{children}</div>
      </div>
    </Portal>
  ) : null;
};
export default Modal;
