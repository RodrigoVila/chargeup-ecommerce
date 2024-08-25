import { Button } from '@packages/button'

export const Home = () => {
  return (
    <main className='xl:mt-18 mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:w-max lg:px-8 xl:w-max'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-center text-4xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl md:text-6xl'>
          <span className='block lg:inline'>ChargeUP</span>
          <span className='ml-2 block xl:inline'>Online Business</span>
        </h1>
        <p className='max-w-xl text-center text-sm text-gray-300 xl:text-2xl'>
          Bienvenido a tu Dashboard de ChargeUP E-commerce. Debajo encontraras algunos de los
          elementos destacados, y puedes acceder en detalle a todas las opciones del menu principal
          en la parte superior.
        </p>
      </div>
      <Button>Invite a new client</Button>
    </main>
  )
}
