import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import Link from 'next/link'

const ICON_SIZE = 30

export const FooterSocialLinks = () => {
  return (
    <div className='flex flex-row pb-4'>
      <Link href='https://www.instagram.com/chargeupbcn/'>
        <span>
          <FiInstagram color='white' className='cursor-pointer' size={ICON_SIZE} />
        </span>
      </Link>
      <Link href='mailto:chargeupbcn@gmail.com'>
        <span>
          <AiOutlineMail color='white' className='mx-2 cursor-pointer' size={ICON_SIZE} />
        </span>
      </Link>
      <Link href='https://wa.me/34667227923'>
        <span>
          <AiOutlineWhatsApp color='white' className='cursor-pointer' size={ICON_SIZE} />
        </span>
      </Link>
    </div>
  )
}
