import { FC, useEffect } from 'react';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import AdminProductDetails from '@admin/AdminProductDetails';

const AdminProductModal: FC = () => {
  const { isAdminProductModalOpen, modalProduct } = useAppSelector();

  useEffect(() => {
    isAdminProductModalOpen && console.log('modalProduct', modalProduct);
  }, [isAdminProductModalOpen]);

  return (
    <Modal isOpen={isAdminProductModalOpen} transparent fullScreen>
      <AdminProductDetails product={modalProduct} />
    </Modal>
  );
};

export default AdminProductModal;
