import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import NavItems from '@main/NavItems';

const DrawerModal = () => {
  const { isDrawerModalOpen } = useAppSelector();

  const { closeDrawerModal } = useAppActions();

  return (
    <Modal isOpen={isDrawerModalOpen} transparent fullScreen>
      <div className="bg-white rounded-md ">
        <div className="flex items-center justify-end w-full px-4 pt-4 pb-0">
          <CloseModalButton color="black" onClose={() => closeDrawerModal()} />
        </div>
        <div className="px-16 mb-6">
          <NavItems direction="column" onClose={() => closeDrawerModal()} />
        </div>
      </div>
    </Modal>
  );
};

export default DrawerModal;
