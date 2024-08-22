import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export const Layout = () => {
  return (
    <div className='bg-slate-950 flex min-h-screen w-full text-gray-200'>
      <Sidebar />
      <main className='flex w-full justify-center'>
        <h1 className='text-center text-3xl'></h1>
        <Outlet />
      </main>
    </div>
  )
}
