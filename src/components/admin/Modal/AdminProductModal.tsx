import useAppSelector from '@hooks/useAppSelector';
import { FC, useEffect } from 'react';

import AdminProductDetails from '@admin/AdminProductDetails';
import Modal from '@shared/Modal';

const AdminProductModal: FC = () => {
  const { isAdminProductModalOpen, modalProduct } = useAppSelector();

  useEffect(() => {
    isAdminProductModalOpen && console.log('modalProduct', modalProduct);
  }, [isAdminProductModalOpen]);

  return (
    <Modal isOpen={isAdminProductModalOpen}>
      <AdminProductDetails product={modalProduct} />
    </Modal>
  );
};

export default AdminProductModal;
