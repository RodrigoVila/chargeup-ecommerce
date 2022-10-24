import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import Login from '@shared/Login';

const LoginModal = () => {
  const { isLoginModalOpen } = useAppSelector();

  return (
    <Modal isOpen={isLoginModalOpen} transparent fullScreen>
      <Login />
    </Modal>
  );
};

export default LoginModal;
