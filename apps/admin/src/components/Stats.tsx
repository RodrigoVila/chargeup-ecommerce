function Stats() {
  return (
    <div className='mx-auto mb-5 mt-5 max-w-xl px-2 sm:px-6 lg:px-8'>
      <div className='items-left'>
        <h1 className='mx-1 my-2 text-center font-bold uppercase tracking-wide text-violet-900'>
          Estadisticas de los últimos 30 dias
        </h1>
        <div className='h-full w-full items-center '>
          <div className='sm:colummns-1 mb-1 h-full min-h-max min-w-max rounded-lg bg-white align-middle sm:my-2 md:columns-3'>
            <div className='bt-1 h-full w-full rounded-md border-gray-300 bg-gray-50 pb-4 text-center align-middle text-zinc-100 shadow-lg shadow-violet-900/20'>
              <div className='w-auto w-full border-b-2 border-zinc-200 bg-zinc-100 p-2 text-xs font-medium uppercase tracking-wider text-gray-700 '>
                {' '}
                Ventas del mes
              </div>
              <div className='xxs:text-lg xs:text-base min-h-fit pt-2 text-base font-bold text-gray-900 md:text-base md:text-lg lg:font-extrabold'>
                54
              </div>
            </div>

            <div className='bt-1 mt-8 h-full w-full rounded-md border-gray-300 bg-gray-50 pb-4 text-center align-middle text-zinc-100 shadow-lg shadow-violet-900/20'>
              <div className='w-auto w-full border-b-2 border-zinc-200 bg-zinc-100 p-2 text-xs font-medium uppercase tracking-wider text-gray-700'>
                Total mensual :
              </div>
              <div className='xxs:text-lg xs:text-base min-h-fit pt-2 text-base font-bold text-gray-900 md:text-base md:text-lg lg:font-extrabold'>
                € 7.000
              </div>
            </div>

            <div className='bt-1 mt-8 h-full w-full rounded-md border-gray-300 bg-gray-50 pb-4 text-center align-middle text-zinc-100 shadow-lg shadow-violet-900/20'>
              <div className='w-auto w-full border-b-2 border-zinc-200 bg-zinc-100 p-2 text-xs font-medium uppercase tracking-wider text-gray-700'>
                {' '}
                Nuevos clientes:
              </div>
              <div className='xxs:text-lg xs:text-base min-h-fit pt-2 text-base font-bold text-gray-900 md:text-base md:text-lg lg:font-extrabold'>
                14
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Stats
