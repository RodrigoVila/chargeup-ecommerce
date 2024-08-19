import { IoHomeOutline, IoPeopleOutline, IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'
import { BsInboxes } from 'react-icons/bs'
import { MdFormatListNumbered } from 'react-icons/md'

import { NavItem } from '~/components/NavItem'
import { Logo } from './navbar/components'

const Sidebar = () => {
  return (
    <aside className='w-max border-r-2 border-r-slate-800 text-white'>
      <Logo />
      <ul className='mt-4 flex min-h-screen flex-col text-center'>
        <NavItem label='Dashboard' icon={<IoHomeOutline size={20} />} to='dashboard' />
        <NavItem label='Products' icon={<BsInboxes size={20} />} to='products' />
        <NavItem label='Orders' icon={<MdFormatListNumbered size={20} />} to='orders' />
        <NavItem label='Users' icon={<IoPeopleOutline size={20} />} to='users' />
        <NavItem label='Settings' icon={<IoSettingsOutline size={20} />} to='settings' disabled />
        <NavItem label='Logout' icon={<IoLogOutOutline size={20} />} to='logout' disabled />
      </ul>
    </aside>
  )
}

export default Sidebar
