import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import CloseModalButton from '@shared/Buttons/CloseModalButton';
import NavItems from '@main/NavItems';

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
