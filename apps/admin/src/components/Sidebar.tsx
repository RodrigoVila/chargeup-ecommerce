'use client'
import { useRouter } from 'next/navigation'
import { IoHomeOutline, IoPeopleOutline, IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'
import { BsInboxes } from 'react-icons/bs'
import { MdFormatListNumbered } from 'react-icons/md'

import { NavItem } from '~/components/NavItem'
import { Logo } from './navbar/components'

const Sidebar = () => {
  const router = useRouter()

  return (
    <aside className='w-max border-r-2 border-r-slate-800 text-white'>
      <Logo />
      <ul className='mt-4 flex min-h-screen flex-col text-center'>
        <NavItem
          label='Dashboard'
          icon={<IoHomeOutline size={20} />}
          onClick={() => router.push('/dashboard')}
        />
        <NavItem
          label='Products'
          icon={<BsInboxes size={20} />}
          onClick={() => router.push('/products')}
        />
        <NavItem
          label='Orders'
          icon={<MdFormatListNumbered size={20} />}
          onClick={() => router.push('/orders')}
        />
        <NavItem
          label='Users'
          icon={<IoPeopleOutline size={20} />}
          onClick={() => router.push('/users')}
        />
        <NavItem
          label='Settings'
          icon={<IoSettingsOutline size={20} />}
          onClick={() => router.push('/settings')}
          disabled
        />
        <NavItem label='Logout' icon={<IoLogOutOutline size={20} />} onClick={() => {}} disabled />
      </ul>
    </aside>
  )
}

export default Sidebar
