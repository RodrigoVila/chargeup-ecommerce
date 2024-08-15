export default function CustomerSearch() {
  return (
    <div className='flex justify-center bg-violet-800 py-4'>
      <div className='bg-gray-200 '>
        <div className='flex items-center justify-center  bg-violet-800'>
          <div className='relative rounded-lg bg-violet-800'>
            <div className='absolute left-3 top-4'>
              {' '}
              <i className='z-20 text-gray-400 hover:text-gray-500'></i>{' '}
            </div>
            <input
              type='text'
              className='z-0 h-12 w-96 rounded-xl bg-violet-100 pl-10 pr-20 focus:shadow focus:outline-none'
              placeholder='Buscar cliente...'
            ></input>

            <div className='absolute right-2 top-2'>
              {' '}
              <button className='h-8 w-20 rounded-lg bg-violet-500 text-white hover:bg-violet-300 hover:text-violet-900'>
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  )
}
