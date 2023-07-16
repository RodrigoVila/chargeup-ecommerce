import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import UserDetails from '@main/UserDetails';

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
