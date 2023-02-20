import { FiInstagram } from 'react-icons/fi';
import { AiOutlineMail, AiFillHeart, AiOutlineWhatsApp } from 'react-icons/ai';

import ActiveLink from '@shared/ActiveLink';
import Link from 'next/link';

const ICON_SIZE = 30;

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center justify-center w-full pt-3 text-white bg-black"
    >
      <div className="mb-2 text-2xl md:ext-3xl">Contactanos</div>
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

      <div className="pb-4 text-sm text-center text-gray-300 text-md">
        <Link href="/terms">Terms & Conditions</Link> | <Link href="/cookies">Cookies policy</Link>{' '}
        | <a href="mailto:chargeupbcn@gmail.com">Feedback</a>
      </div>
      <div className="flex flex-wrap items-center justify-center pb-2 text-sm text-center text-gray-300">
        Made with <AiFillHeart className="mx-1" color="red" size={18} />
        <a
          target="_blank"
          rel="noreferrer"
          className="mx-1 text-orange-400"
          href="https://www.linkedin.com/in/victoriacabello/"
        >
          Veke
        </a>
        (Design) &
        <a
          target="_blank"
          rel="noreferrer"
          className="mx-1 text-orange-400"
          href="https://www.linkedin.com/in/rsvila/"
        >
          Rodri
        </a>
        (Development).
      </div>
    </footer>
  );
};

export default Footer;
