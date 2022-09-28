import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import UserDetails from '@main/UserDetails';

const UserModal = () => {
  const { isUserModalOpen } = useAppSelector();
  const { closeUserModal } = useAppActions();

  return (
    <Modal isOpen={isUserModalOpen} fullScreen>
      <CloseModalButton color="black" position="left" onClose={closeUserModal} />
      <UserDetails />
    </Modal>
  );
};

export default UserModal;
