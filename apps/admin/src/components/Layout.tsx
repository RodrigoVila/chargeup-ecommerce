import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { DrawerFloatingMenu } from './DrawerFloatingMenu'

export const Layout = () => {
  return (
    <div className='bg-slate-950 flex min-h-screen w-full flex-col text-gray-200 lg:flex-row'>
      <Sidebar />
      <DrawerFloatingMenu />
      <main className='flex w-full justify-center '>
        <h1 className='text-center text-3xl'></h1>
        <Outlet />
      </main>
    </div>
  )
}
