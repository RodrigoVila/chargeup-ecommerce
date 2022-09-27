import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import Login from '@shared/Login';
import CloseModalButton from '@main/Buttons/CloseModalButton';

const LoginModal = () => {
  const { isLoginModalOpen } = useAppSelector();

  const { closeLoginModal } = useAppActions();

  return (
    <Modal isOpen={isLoginModalOpen} fullScreen>
      <CloseModalButton color="white" position="left" onClose={() => closeLoginModal()} />
      <Login />
    </Modal>
  );
};

export default LoginModal;
