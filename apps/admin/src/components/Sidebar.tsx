'use client'
import { useRouter } from 'next/navigation'
import { IoMdHome, IoMdSettings } from 'react-icons/io'
import { IoLogOut } from 'react-icons/io5'
import { FaBoxes } from 'react-icons/fa'
import { RiListSettingsFill } from 'react-icons/ri'
import { BsFillPeopleFill } from 'react-icons/bs'

import { NavItem } from '~components/NavItem'
import { Logo } from './navbar/components'

const Sidebar = () => {
  const router = useRouter()

  return (
    <aside className='w-max border-r-2 border-r-slate-800 text-white'>
      <Logo />
      <ul className='flex min-h-screen flex-col text-center'>
        <NavItem
          label='Dashboard'
          icon={<IoMdHome size={25} />}
          onClick={() => router.push('/dashboard')}
        />
        <NavItem
          label='Products'
          icon={<FaBoxes size={25} />}
          onClick={() => router.push('/products')}
        />
        <NavItem
          label='Orders'
          icon={<RiListSettingsFill size={25} />}
          onClick={() => router.push('/orders')}
        />
        <NavItem
          label='Customers'
          icon={<BsFillPeopleFill size={25} />}
          onClick={() => router.push('/customers')}
        />
        <NavItem
          label='Settings'
          icon={<IoMdSettings size={25} />}
          onClick={() => router.push('/settings')}
        />
        <NavItem label='Logout' icon={<IoLogOut size={25} />} onClick={() => {}} />
      </ul>
    </aside>
  )
}

export default Sidebar
