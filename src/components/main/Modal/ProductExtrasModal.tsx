import { FC } from 'react';
import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import { colors } from '@constants';
import Modal from '@shared/Modal';
import Button from '@main/Buttons/Button';

const ProductExtrasModal: FC = () => {
  const { isExtraModalOpen, modalProduct } = useAppSelector();

  const { closeProductModal } = useAppActions();

  return (
    <Modal isOpen={isExtraModalOpen} transparent fullScreen>
      <div className="flex flex-col w-full bg-white rounded-md xl:p-2">
        {/*header*/}
        <h3 className="my-2 text-2xl font-semibold text-center xl:my-4">{modalProduct?.title}</h3>
        {/*body*/}
        <div className="px-2 text-center">
          <div className="px-1 text-sm leading-relaxed text-slate-500">
            {modalProduct?.description.long?.map((p,i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-4 xl:p-0 xl:py-2">
          <Button title="Cerrar" color={colors.purple} className="py-1 xl:w-1/2" onClick={() => closeProductModal()} />
        </div>
      </div>
    </Modal>
  );
};

export default ProductExtrasModal;
