import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { closeProductDetailModal } from '@redux/actionCreators'

import { colors } from '@utils/constants'
import Image from 'next/image'
import Button from './Button'
import { shallowEqual } from 'react-redux'

interface Props {
  title: string
  description: string
  imgUri: string
}
const ProductModal = ({ title, description, imgUri }: Props) => {
  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.product, shallowEqual)

  const dispatch = useAppDispatch()
  const closeModal = () => dispatch(closeProductDetailModal())

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isOpen])

  return isOpen ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden rounded-lg shadow-lg outline-none focus:outline-none">
        <div className="relative mx-auto my-6 flex w-3/4 overflow-hidden rounded-xl border-0">
          {/*image*/}
          <div className="relative w-1/3 bg-purple-300">
            <Image objectFit="cover" layout="fill" src={`/${imgUri}-large.jpg`} alt="" />
          </div>
          {/*content*/}
          <div className="relative flex w-full flex-col border-0 bg-red-500 ">
            {/*header*/}
            <div className="flex items-center justify-between p-5 ">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="float-right ml-auto p-1 text-3xl font-semibold leading-none"
                onClick={closeModal}
              >
                <span className="h-6 w-6 text-2xl font-bold text-black">X</span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-6">
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
