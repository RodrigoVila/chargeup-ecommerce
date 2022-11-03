import { FiInstagram } from 'react-icons/fi'
import { AiOutlineMail, AiFillHeart, AiOutlineWhatsApp } from 'react-icons/ai'

import ActiveLink from '@shared/ActiveLink'

const ICON_SIZE = 40

const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col items-center justify-center w-full pt-3 text-white bg-black"
      >
        <div className="mb-2 text-2xl">Contactanos</div>
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
          <a href="/terms">Terms & Conditions</a> | <a href="/cookies">Cookies policy</a> |{' '}
          <a href="mailto:chargeupbcn@gmail.com">Feedback</a>
        </div>
        <div className="flex items-center justify-center pb-2 text-xs text-center text-gray-300 md:text-lg">
          Made with <AiFillHeart className="mx-1" color="red" size={18} /> by{' '}
          <a
            target="_blank"
            className="mx-1 text-orange-400"
            href="https://www.linkedin.com/in/victoriacabello/"
          >
            Veke
          </a>
          (Design) &
          <a
            target="_blank"
            className="mx-1 text-orange-400"
            href="https://www.linkedin.com/in/rsvila/"
          >
            Rodri
          </a>
          (Development).
        </div>
      </div>
    </>
  )
}

export default Footer
