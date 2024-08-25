import { FaBars } from 'react-icons/fa'

interface BurgerButtonProps {
  toggle?: () => void
}

export const BurgerButton = ({ toggle }: BurgerButtonProps) => {
  return (
    <button className='flex items-start text-white xl:hidden' onClick={toggle}>
      <FaBars size={24} color='white' />
    </button>
  )
}
