import { useEffect, FC } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { closeProductDetailModal } from '@redux/actionCreators'

import { colors } from '@utils/constants'
import Image from 'next/image'
import Button from './Button'
import { shallowEqual } from 'react-redux'

interface Props {
  product: ProductType
}
const ProductModal: FC<Props> = ({ product }) => {
  const { title, description, imgUri } = product

  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.product, shallowEqual)

  const dispatch = useAppDispatch()

  const closeModal = () => dispatch(closeProductDetailModal())

  // useEffect(() => {
  //   isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  // }, [isOpen])

  return isOpen && product ? (
    <>
      <div className="fixed w-full top-0 z-50 flex flex-col items-center justify-center rounded-lg shadow-lg outline-none focus:outline-none">
        <div className="mx-auto lg:my-6 flex w-full lg:w-3/4 md:rounded-xl border-0">
          {/*content*/}
          <div className="flex w-full flex-col border-0 bg-white ">
            {/*header*/}
            <div className="relative flex items-center justify-center py-5">
              <h3 className="text-3xl text-center font-semibold">{title}</h3>
              <button
                className="absolute right-2 top-0 text-3xl font-semibold leading-none"
                onClick={closeModal}
              >
                <span className="h-6 w-6 text-2xl font-bold text-black">X</span>
              </button>
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
