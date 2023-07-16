import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import NavItems from '@main/NavItems';
import Modal from '@shared/Modal';

const DrawerModal = () => {
  const { isDrawerModalOpen } = useAppSelector();

  const { closeDrawerModal } = useAppActions();

  return (
    <Modal isOpen={isDrawerModalOpen} onClose={closeDrawerModal}>
      <NavItems direction="column" onClose={() => closeDrawerModal()} />
    </Modal>
  );
};

export default DrawerModal;
