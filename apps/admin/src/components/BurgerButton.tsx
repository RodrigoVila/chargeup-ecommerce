import { FaBars } from 'react-icons/fa'

interface BurgerButtonProps {
  toggle?: () => void
}

export const BurgerButton = ({ toggle }: BurgerButtonProps) => {
  return (
    <button className='absolute top-2 left-2 text-white xl:hidden' onClick={toggle}>
      <FaBars size={24} color='white' />
    </button>
  )
}
