import { colors } from '@utils/constants'
import Image from 'next/image'
import { RiCloseFill } from 'react-icons/ri'
import Button from './Button'

interface Props {
  title: string
  description: string
  imgUri: string
  isOpen: boolean
  closeModal: () => void
}
const Modal = ({ title, description, imgUri, isOpen, closeModal }: Props) => {
  return isOpen ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto rounded-lg shadow-lg outline-none focus:outline-none">
        <div className="relative flex w-3/4 mx-auto my-6 overflow-hidden border-0 rounded-xl">
          {/*image*/}
          <div className="relative w-1/3 bg-purple-300 h-screen/2">
            <Image objectFit="cover" layout="fill" src={imgUri} alt="" />
          </div>
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 ">
            {/*header*/}
            <div className="flex items-center justify-between p-5 ">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="float-right p-1 ml-auto text-3xl font-semibold leading-none"
                onClick={closeModal}
              >
                <span className="w-6 h-6 text-2xl font-bold text-black">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-6">
              <p className="my-4 text-lg leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 rounded-b ">
              <Button
                title="Cerrar"
                color={colors.purple}
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
      </div>
      {/*overlay*/}
      <div className="fixed inset-0 z-40 bg-black opacity-25" />
    </>
  ) : null
}

export default Modal
