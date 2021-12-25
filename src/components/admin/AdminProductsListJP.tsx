import React, { useState } from 'react'
import { GiConsoleController } from 'react-icons/gi';
import AdminProductJP from './AdminProductJP';


const product_data = [
    {
      id:1,
      name: 'Nueces Pecan',
      orderdetail1: '$18.55',
      orderdetail2: 'x Kg.',
      description: 'Nueces Pecan BIO origen Francia, Paris. Batch#02665 .Proovedor: Catalunya Seeds (Barcelona)',
      num: '#0244',
      image:
        'https://sc04.alicdn.com/kf/UTB83xRsE0oSdeJk43Owq6ya4XXaS.jpg',
    },
    // More people...
  ]

  //JP levantar en esta var el name del array product_data
 const current_product = 'Nueces Pecan Bio (FR)'


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function AdminProductsListJP() {
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
                      Producto
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Precio
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Descripcion
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {product_data.map((product) => (
                    <tr key={product.num}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-500">{product.num}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.orderdetail1}</div>
                        <div className="text-sm text-gray-500">{product.orderdetail2}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          10 kg
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        
                        <button onClick={() => loadDetails(true) }  type="button" className="bg-zinc-800 rounded-full text-zinc-300 shadow-xl shadow-zinc-400/50 py-2 px-3 m-1 text-xs"> 

                          Modificar </button>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {  loaded && <AdminProductJP  current_product={current_product} /> } 
      </div>
    )
  }
  
    
    export default  AdminProductsListJP;


