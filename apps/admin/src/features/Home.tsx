import AdminClientInvite from '~/components/ClientInvite'

export const Home = () => {
  return (
    <main className='xl:mt-18 mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:w-max lg:px-8 xl:w-max'>
      <div className=''>
        <h1 className='text-center text-4xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl md:text-6xl'>
          <span className='block lg:inline'>ChargeUP</span>
          <span className='block xl:inline'>Online Business</span>
        </h1>
        <div className='xl:align-center xl:object-center'>
          <p className='xl:align-right 2xl:align-right mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 xl:object-right '>
            Bienvenido a tu Dashboard de ChargeUP E-commerce. Debajo encontraras algunos de los
            elementos destacados, y puedes acceder en detalle a todas las opciones del menu
            principal en la parte superior.
          </p>
        </div>
      </div>
      <AdminClientInvite />
    </main>
  )
}