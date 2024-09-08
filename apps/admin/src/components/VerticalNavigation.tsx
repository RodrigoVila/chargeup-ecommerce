import { IoHomeOutline, IoPeopleOutline, IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'
import { BsInboxes } from 'react-icons/bs'
import { MdFormatListNumbered } from 'react-icons/md'

import { NavItem } from '~/components/NavItem'
import { Logo } from '~/components/Logo'
import { twMerge } from 'tailwind-merge'

type VerticalNavigationProps = {
  isSidebar?: boolean
  className?: string
}

export const VerticalNavigation = ({ isSidebar = false, className }: VerticalNavigationProps) => {
  return (
    <nav className={twMerge('text-white', className)}>
      {isSidebar && <Logo />}
      <ul className={twMerge('flex flex-col text-center', !isSidebar && 'py-6')}>
        <NavItem label='Dashboard' icon={<IoHomeOutline size={20} />} to='dashboard' />
        <NavItem label='Products' icon={<BsInboxes size={20} />} to='products' />
        <NavItem label='Orders' icon={<MdFormatListNumbered size={20} />} to='orders' />
        <NavItem label='Users' icon={<IoPeopleOutline size={20} />} to='users' />
        <NavItem label='Settings' icon={<IoSettingsOutline size={20} />} to='settings' disabled />
        <NavItem label='Logout' icon={<IoLogOutOutline size={20} />} to='logout' disabled />
      </ul>
    </nav>
  )
}
