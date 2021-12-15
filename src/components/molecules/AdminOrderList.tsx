import React from 'react'
import { useState } from 'react'
import AdminOrderDetails from '@molecules/AdminOrderDetails'



const people = [
    {
      name: 'Jane Cooper',
      orderdetail1: 'Order #00574 (10/12/2021)',
      orderdetail2: ' Total: $58.65',
      comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
      email: 'jane@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jorge Formento',
        orderdetail1: 'Order #00575 (10/12/2021)',
        orderdetail2: ' Total: $18.65',
        comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
        email: 'janr@example.com',
        image:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },  {
        name: 'Connor Mc Gregor',
        orderdetail1: 'Order #00576 (10/12/2021)',
        orderdetail2: ' Total: $12258.65',
        comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
        email: 'jaooper@example.com',
        image:
          'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },  {
        name: 'Jerry Spring',
        orderdetail1: 'Order #00577 (10/12/2021)',
        orderdetail2: ' Total: $58.65',
        comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
        email: 'jar@example.com',
        image:
          'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },  {
        name: 'Laura Hills',
        orderdetail1: 'Order #00578 (10/12/2021)',
        orderdetail2: ' Total: $958.65',
        comments: 'Deliver on 12/12 Joan Miro 10, St Boi, Barcelona.',
        email: 'janer@example.com',
        image:
          'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },  ]


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function AdminOrderList() {
    const [loaded, loadDetails] = useState(false);
        return (

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 bg-zinc-600">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-zinc-300">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cliente
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Detalles de la orden
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estado
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Comentarios
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                            <div className="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.orderdetail1}</div>
                        <div className="text-sm text-gray-500">{person.orderdetail2}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Enviado
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.comments}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        
                        <button onClick={() => loadDetails(true) } type="button" className="bg-zinc-800 rounded-full text-zinc-300 shadow-xl shadow-zinc-400/50 py-2 px-3 m-1 text-xs"> 

                          Detalles </button>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {  loaded && <AdminOrderDetails /> } 
      </div>
   
    )
  }
  
    
    export default  AdminOrderList;

