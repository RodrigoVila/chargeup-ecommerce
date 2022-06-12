import { FC, useEffect } from 'react'
import Image from 'next/image'
import { shallowEqual } from 'react-redux'

import { closeProductModal } from '@redux/actions'
import { useAppDispatch, useAppSelector } from '@hooks'
import { colors } from '@utils/constants'
import Button from './Button'

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

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isOpen])

  return isOpen ? (
    <div className="relative">
      <div className="fixed inset-0 z-50 mx-2 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-3xl">
          {/*content*/}
          <div className="flex w-full flex-col border-0 bg-white ">
            {/*header*/}
            <div className="relative flex items-center justify-center py-5">
              <h3 className="text-center text-3xl font-semibold">{selectedProduct?.title}</h3>
              {/* <div className="absolute right-2 top-2">
                <CloseModalButton color="black" position="right" onClose={closeModal} />
              </div> */}
            </div>
            {/*body*/}
            <div className="relative flex-auto px-2 text-center">
              <p className="my-4 px-8 text-xl leading-relaxed text-slate-500">
                {selectedProduct?.description}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end rounded-b p-2 ">
              <Button title="Cerrar" color={colors.purple} onClick={closeModal} />
            </div>
          </div>
        </div>
      </div>
      {/*overlay*/}
      <div className="fixed inset-0 z-40 bg-black opacity-25" />
    </div>
  ) : null
}

export default ProductModal
