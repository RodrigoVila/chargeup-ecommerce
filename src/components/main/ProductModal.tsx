import { colors } from '@utils/constants'
import Image from 'next/image'
import { RiCloseFill } from 'react-icons/ri'
import Button from './Button'

interface Props {
  title: string
  description: string
  imgName: string
  isOpen: boolean
  closeModal: () => void
}
const Modal = ({ title, description, imgName, isOpen, closeModal }: Props) => {
  console.log('imgName', imgName)
  return isOpen ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden rounded-lg shadow-lg outline-none focus:outline-none">
        <div className="relative mx-auto my-6 flex w-3/4 overflow-hidden rounded-xl border-0">
          {/*image*/}
          <div className="relative w-1/3 bg-purple-300">
            <Image objectFit="cover" layout="fill" src={`/${imgName}-large.jpg`} alt="" />
          </div>
          {/*content*/}
          <div className="relative flex w-full flex-col border-0 bg-white ">
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
            <div className="flex items-center justify-end rounded-b p-6 ">
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

export default Modal
