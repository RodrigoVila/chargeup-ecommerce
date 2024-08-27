import { FaBars } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

import { useAppActions } from '~hooks'

interface Props {
  className?: string
}

export const BurgerButton = ({ className }: Props) => {
  return <button className={twMerge('relative xl:hidden', className)}></button>
}
