import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

interface BurgerButtonProps {
  isOpen?: boolean
  toggle?: () => void
}

export const BurgerButton = ({ isOpen, toggle }: BurgerButtonProps) => {
  return (
    <div
      className='relative mx-2 flex h-12 cursor-pointer items-center justify-center xl:hidden'
      onClick={toggle}
    >
      {isOpen ? (
        <IoMdClose className='h-6 w-6 text-white' />
      ) : (
        <FaBars className='h-6 w-6 text-white' />
      )}
    </div>
  )
}
