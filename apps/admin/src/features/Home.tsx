import { Button } from '@packages/button'
import { Logo } from '~/components/Logo'

export const Home = () => {
  return (
    <main className='mx-8 flex h-[calc(100vh-6rem)] flex-col items-center justify-center gap-4 xl:gap-8'>
      <Logo size={150} />
      <h1 className='-mt-5 text-center text-5xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl md:text-6xl'>
        <span className='block lg:inline'>ChargeUP</span>
        <span className='ml-2 block xl:inline'>Online Business</span>
      </h1>
      <p className='max-w-xl text-center text-lg text-gray-300 xl:text-2xl'>
        Bienvenido a tu Dashboard de ChargeUP E-commerce. Debajo encontraras algunos de los
        elementos destacados, y puedes acceder en detalle a todas las opciones del menu principal en
        la parte superior.
      </p>
      <Button variant='filled' className='w-max bg-purple-800 duration-300 hover:bg-purple-700'>
        Invite a new client
      </Button>
    </main>
  )
}
