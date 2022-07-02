import { FiInstagram } from 'react-icons/fi'
import { AiOutlineMail, AiFillHeart, AiOutlineWhatsApp } from 'react-icons/ai'

import ActiveLink from '@shared/ActiveLink'

const ICON_SIZE = 40

const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="flex w-full flex-col items-center justify-center bg-gray-800 pt-3 text-white"
      >
        <div className="mb-2 text-2xl">Contactanos!</div>
        <div className="flex flex-row pb-4">
          <ActiveLink href="https://www.instagram.com/chargeupbcn/" data-tip="Alto en proteina">
            <FiInstagram color="white" className="cursor-pointer" size={ICON_SIZE} />
          </ActiveLink>
          <ActiveLink href="mailto:chargeupbcn@gmail.com">
            <AiOutlineMail color="white" className="mx-2 cursor-pointer" size={ICON_SIZE} />
          </ActiveLink>
          <ActiveLink href="https://wa.me/34667227923">
            <AiOutlineWhatsApp color="white" className="cursor-pointer" size={ICON_SIZE} />
          </ActiveLink>
        </div>
        <div className="text-sm text-gray-300 md:text-lg">
          Privacy policy | Terms & Conditions | Feedback
        </div>
        <div className="flex items-center justify-center pb-2 text-center text-xs text-gray-300 md:text-lg">
          Made with <AiFillHeart className="mx-1" color="red" size={18} /> by Veke (Design) & Rodri
          (Development).
        </div>
      </div>
    </>
  )
}

export default Footer
