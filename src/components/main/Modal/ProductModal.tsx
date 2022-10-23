import { FC } from 'react';
import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import { colors } from '@constants';
import Modal from '@shared/Modal';
import Button from '@main/Buttons/Button';

const ProductModal: FC = () => {
  const { isProductModalOpen, modalProduct } = useAppSelector();

  const { closeProductModal } = useAppActions();

  return (
    <Modal isOpen={isProductModalOpen} fullScreen transparent>
      <div className="flex w-full flex-col">
        {/*header*/}
        <h3 className="my-2 text-center text-2xl font-semibold">{modalProduct?.title}</h3>
        {/*body*/}
        <div className="px-2 text-center">
          <p className="px-1 text-sm leading-relaxed text-slate-500">
            {modalProduct?.description.long?.map((p,i) => (
              <p key={i}>{p}</p>
            ))}
          </p>
        </div>
        <div className="flex items-center px-4 pb-4 pt-4">
          <Button title="Cerrar" color={colors.purple} onClick={() => closeProductModal()} />
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
