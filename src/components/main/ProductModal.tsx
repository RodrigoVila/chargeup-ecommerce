import { FC, useEffect } from 'react'
import { shallowEqual } from 'react-redux'

import { useAppSelector } from '@hooks/index'
import useReduxActions from '@hooks/useReduxActions'

import Button from './Button'
import { colors } from '@constants'
import Modal from '@shared/Modal'

const ProductModal: FC = () => {
  const isOpen: boolean = useAppSelector(
    (state: StateType) => state.modal.productModal,
    shallowEqual
  )

  const selectedProduct: ProductType = useAppSelector(
    (state: StateType) => state.modal.selectedProduct,
    shallowEqual
  )

  const { closeProductModal } = useReduxActions()

  return (
    <Modal isOpen={isOpen} fullScreen transparent>
      <div className="flex w-full flex-col">
        {/*header*/}
        <h3 className="my-2 text-center text-2xl font-semibold">{selectedProduct?.title}</h3>
        {/*body*/}
        <div className="px-2 text-center">
          <p className="px-1 text-sm leading-relaxed text-slate-500">
            {selectedProduct?.description.long?.map((p) => (
              <p>{p}</p>
            ))}
          </p>
        </div>
        <div className="flex items-center px-4 pb-4 pt-4">
          <Button title="Cerrar" color={colors.purple} onClick={() => closeProductModal()} />
        </div>
      </div>
    </Modal>
  )
}

export default ProductModal
