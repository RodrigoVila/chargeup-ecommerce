import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

export const Layout = () => {
  const location = useLocation()
  console.log({ location })
  return (
    <div className='flex min-h-screen w-full bg-slate-900 text-white'>
      <Sidebar />
      <main className='flex w-full justify-center'>
        <h1 className='text-center text-3xl'></h1>
        <Outlet />
      </main>
    </div>
  )
}
