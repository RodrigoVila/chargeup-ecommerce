import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import { FC } from 'react';

import Button from '@shared/Buttons/CustomButton';
import Modal from '@shared/Modal';

const ProductDescModal: FC = () => {
  const { isProductModalOpen, selectedModalProduct } = useAppSelector();

  const { closeProductModal } = useAppActions();

  return (
    <Modal isOpen={isProductModalOpen} onClose={closeProductModal}>
      <div className="flex flex-col w-full gap-3">
        {/*header*/}
        <h3 className="text-2xl font-semibold text-center">{selectedModalProduct?.title}</h3>
        {/*body*/}
        <div className="text-center">
          <div className="px-1 text-sm leading-relaxed text-slate-500">
            {selectedModalProduct?.description.long?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <Button onClick={() => closeProductModal()}>Cerrar</Button>
      </div>
    </Modal>
  );
};

export default ProductDescModal;
