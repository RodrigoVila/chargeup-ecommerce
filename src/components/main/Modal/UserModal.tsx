import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import UserDetails from '@main/UserDetails';

const UserModal = () => {
  const { isUserModalOpen } = useAppSelector();

  return (
    <Modal isOpen={isUserModalOpen} transparent fullScreen>
      <UserDetails />
    </Modal>
  );
};

export default UserModal;
