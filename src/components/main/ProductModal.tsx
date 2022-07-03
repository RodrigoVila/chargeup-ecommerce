import { FC, useEffect } from 'react'
import { shallowEqual } from 'react-redux'

import { closeProductModal } from '@redux/actions'
import { useAppDispatch, useAppSelector } from '@hooks'
import Modal from 'components/shared/Modal'
import Button from './Button'
import { colors } from '@constants'

const ProductModal: FC = () => {
  const isOpen: boolean = useAppSelector(
    (state: StateType) => state.modal.productModalOpen,
    shallowEqual
  )

  const selectedProduct: ProductType = useAppSelector(
    (state: StateType) => state.modal.selectedProduct,
    shallowEqual
  )

  const dispatch = useAppDispatch()

  const closeModal = () => dispatch(closeProductModal())

  return (
    <Modal isOpen={isOpen} closeOnOverlayClick transparent>
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
          <Button title="Cerrar" color={colors.purple} onClick={closeModal} />
        </div>
      </div>
    </Modal>
  )
}

export default ProductModal
