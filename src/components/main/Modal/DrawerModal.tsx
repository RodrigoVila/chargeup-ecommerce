import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import UserButton from '@main/Buttons/UserButton';
import NavItems from '@main/NavItems';

const DrawerModal = () => {
  const { isDrawerModalOpen } = useAppSelector();

  const { closeDrawerModal } = useAppActions();

  return (
    <Modal isOpen={isDrawerModalOpen} fullScreen>
      <CloseModalButton color="black" position="left" onClose={() => closeDrawerModal()} />
      <div className="absolute top-2 right-0 z-50">
        <UserButton color="black" />
      </div>
      <NavItems direction="column" onClose={() => closeDrawerModal()} />
    </Modal>
  );
};

export default DrawerModal;
