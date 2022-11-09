import { useEffect } from 'react';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import UserButton from '@main/Buttons/UserButton';
import NavItems from '@main/NavItems';
import Button from '@main/Buttons/Button';
import { colors, lang } from '@constants';

const DrawerModal = () => {
  const { isDrawerModalOpen, userLogin } = useAppSelector();

  const { closeDrawerModal, openLoginModal } = useAppActions();

  return (
    <Modal isOpen={isDrawerModalOpen} transparent fullScreen>
      <div className="bg-white rounded-md ">
        <div className="flex items-center justify-between w-full">
          <UserButton color='black'/>
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
