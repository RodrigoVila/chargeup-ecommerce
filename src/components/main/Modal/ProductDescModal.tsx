import { FC } from 'react';
import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import { colors } from '@constants/colors';
import Modal from '@shared/Modal';
import Button from '@main/Buttons/Button';

const ProductDescModal: FC = () => {
  const { isProductModalOpen, selectedModalProduct } = useAppSelector();

  const { closeProductModal } = useAppActions();

  return (
    <Modal isOpen={isProductModalOpen} transparent fullScreen>
      <div className="flex flex-col w-full bg-white rounded-md">
        {/*header*/}
        <h3 className="my-2 text-2xl font-semibold text-center">{selectedModalProduct?.title}</h3>
        {/*body*/}
        <div className="px-2 text-center">
          <div className="px-1 text-sm leading-relaxed text-slate-500">
            {selectedModalProduct?.description.long?.map((p,i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="flex items-center px-4 pt-4 pb-4">
          <Button title="Cerrar" color={colors.purple} onClick={() => closeProductModal()} />
        </div>
      </div>
    </Modal>
  );
};

export default ProductDescModal;
