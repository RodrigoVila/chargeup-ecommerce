import useActions from '@hooks/useActions';
import useSelector from '@hooks/useSelector';

import Modal from '@shared/Modal';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import NavItems from './NavItems';

const DrawerModal = () => {
  const { isDrawerModalOpen } = useSelector();

  const { closeDrawerModal } = useActions();

  return (
    <Modal isOpen={isDrawerModalOpen} fullScreen>
      <CloseModalButton color="black" position="left" onClose={() => closeDrawerModal()} />
      <NavItems direction="column" onClose={() => closeDrawerModal()} />
    </Modal>
  );
};

export default DrawerModal;
