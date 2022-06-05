import { FC, useEffect } from 'react'
import Image from 'next/image'
import { shallowEqual } from 'react-redux'

import { closeProductDetailModal } from '@redux/actionCreators'
import { useAppDispatch, useAppSelector } from '@hooks'
import CloseModalButton from '@main/Buttons/CloseModalButton'
import { colors } from '@utils/constants'
import Button from './Button'

interface Props {
  product: ProductType
}
const ProductModal: FC<Props> = ({ product }) => {
  const { title, description, imgUri } = product

  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.product, shallowEqual)

  const dispatch = useAppDispatch()

  const closeModal = () => dispatch(closeProductDetailModal())

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isOpen])

  return isOpen && product ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="flex w-full flex-col border-0 bg-white ">
            {/*header*/}
            <div className="relative flex items-center justify-center py-5">
              <h3 className="text-center text-3xl font-semibold">{title}</h3>
              <div className="absolute right-2 top-2">
                <CloseModalButton color="black" position="right" onClose={closeModal} />
              </div>
            </div>
            {/*image*/}
            <div className="relative h-64 w-full bg-purple-300">
              <Image objectFit="cover" layout="fill" src={`/${imgUri}-large.jpg`} alt="" />
            </div>
            {/*body*/}
            <div className="relative flex-auto px-2 text-center">
              <p className="my-4 text-lg leading-relaxed text-slate-500">{description}</p>
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
    </>
  ) : null
}

export default ProductModal
