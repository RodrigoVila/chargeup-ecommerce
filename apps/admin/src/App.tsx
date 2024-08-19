import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Providers>
      <div className='bg-slate-950 flex min-h-screen'>
        <Sidebar />
        <main className='flex w-full flex-col items-center'>
          <h1 className='py-8 text-5xl capitalize text-white'>{sectionTitle}</h1>
          <div>{children}</div>
        </main>
      </div>
    </Providers>
  )
}

export default App
