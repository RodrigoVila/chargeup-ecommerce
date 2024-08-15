const people = [
  {
    name: 'Jane Cooper - LOAD COMP LOADED',
    orderdetail1: 'Order #00574 (10/12/2021)',
    orderdetail2: ' Total: $58.65',
    comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

function TabDetails() {
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto bg-zinc-600 sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden border-b border-gray-200 bg-zinc-300 shadow sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    Cliente
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    Detalles de la orden
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    Estado
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    Comentarios
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex items-center'>
                        <div className='h-10 w-10 flex-shrink-0'>
                          <img className='h-10 w-10 rounded-full' src={person.image} alt='' />
                        </div>
                        <div className='ml-4'>
                          <div className='text-sm font-medium text-gray-900'>{person.name}</div>
                          <div className='text-sm text-gray-500'>{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='text-sm text-gray-900'>{person.orderdetail1}</div>
                      <div className='text-sm text-gray-500'>{person.orderdetail2}</div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                        Enviado
                      </span>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                      {person.comments}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                      <button
                        type='button'
                        className='m-1 rounded-full bg-zinc-800 px-3 py-2 text-xs text-zinc-300 shadow-xl shadow-zinc-400/50'
                      >
                        Detalles{' '}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabDetails
