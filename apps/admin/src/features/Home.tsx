import { Button } from '@packages/button'
import { useNavigate } from 'react-router-dom'
import { Logo } from '~/components/Logo'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <main className='mx-8 flex h-[calc(100vh-6rem)] flex-col items-center justify-center gap-4 xl:gap-8'>
      <Logo size={150} />
      <h1 className='-mt-5 text-center text-5xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl md:text-6xl'>
        <span className='block lg:inline'>ChargeUP</span>
        <span className='ml-2 block xl:inline'>Online Business</span>
      </h1>
      <p className='max-w-xl text-center text-lg text-gray-300 xl:text-2xl'>
        Welcome to the ChargeUP E-commerce dashboard, where you can manage everything related to
        your online store. Access detailed information about users, products, orders, and real-time
        performance insights to keep your business running at its best.
      </p>
      <Button
        variant='filled'
        className='w-max bg-indigo-800 duration-300 hover:bg-purple-700'
        labelClassName='text-lg'
        onClick={() => navigate('dashboard')}
      >
        Go to Dashboard
      </Button>
    </main>
  )
}
