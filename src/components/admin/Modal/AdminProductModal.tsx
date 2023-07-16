import useAppSelector from '@hooks/useAppSelector';
import { FC } from 'react';

import Modal from '@shared/Modal';

const AdminProductModal: FC = () => {
  const { isAdminProductModalOpen } = useAppSelector();

  return (
    <Modal isOpen={isAdminProductModalOpen} onClose={() => {}}>
      {/* For Future reference */}
      {/* <AdminProductDetails product={modalProduct} /> */}
    </Modal>
  );
};

export default AdminProductModal;
