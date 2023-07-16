import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import UserDetails from '@main/UserDetails';
import Modal from '@shared/Modal';

const UserModal = () => {
  const { isUserModalOpen } = useAppSelector();
  const { closeUserModal } = useAppActions();
  return (
    <Modal isOpen={isUserModalOpen} onClose={closeUserModal}>
      <UserDetails />
    </Modal>
  );
};

export default UserModal;
