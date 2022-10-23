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
  border?: boolean;
  closeOnOverlayClick?: boolean;
}

const Modal = ({
  children,
  isOpen,
  transparent,
  fullScreen = false,
  border=false,
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
        {transparent && <BackgroundOverlay color={colors.overlay} />}
        <div className={`${border && "border-black md:py-2 md:px-4 md:border-2"} z-50 w-full overflow-scroll items-center justify-center flex flex-col bg-white`}>{children}</div>
      </div>
    </Portal>
  ) : null;
};
export default Modal;
