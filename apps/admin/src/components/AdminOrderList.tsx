import AdminOrderDetails from '~components/AdminOrderDetails'
import { useState } from 'react'

const people = [
  {
    name: 'Jane Cooper',
    orderdetail1: 'Order #00574 (10/12/2021)',
    orderdetail2: ' Total: $58.65',
    comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
    email: 'jane@example.com',
    image: 'https://www.svgrepo.com/show/157823/user.svg',
  },
  {
    name: 'Jorge Formento',
    orderdetail1: 'Order #00575 (10/12/2021)',
    orderdetail2: ' Total: $18.65',
    comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
    email: 'janr@example.com',
    image: 'https://www.svgrepo.com/show/157823/user.svg',
  },
  {
    name: 'Connor Mc Gregor',
    orderdetail1: 'Order #00576 (10/12/2021)',
    orderdetail2: ' Total: $12258.65',
    comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
    email: 'jaooper@example.com',
    image: 'https://www.svgrepo.com/show/157823/user.svg',
  },
  {
    name: 'Jerry Spring',
    orderdetail1: 'Order #00577 (10/12/2021)',
    orderdetail2: ' Total: $58.65',
    comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
    email: 'jar@example.com',
    image: 'https://www.svgrepo.com/show/157823/user.svg',
  },
  {
    name: 'Laura Hills',
    orderdetail1: 'Order #00578 (10/12/2021)',
    orderdetail2: ' Total: $958.65',
    comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
    email: 'janer@example.com',
    image: 'https://www.svgrepo.com/show/157823/user.svg',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function AdminOrderList() {
  const [loaded, loadDetails] = useState(false)
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
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
                        onClick={() => loadDetails(true)}
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
      {loaded && <AdminOrderDetails />}
    </div>
  )
}

export default AdminOrderList
