import React, { useState } from 'react'
import { GiConsoleController } from 'react-icons/gi';
import AdminProductDetails from './AdminProductDetails';
import AdminProductSearch from './AdminProductSearch';

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

function AdminProducts() {
  const [loaded, loadDetails] = useState(false);

        return (
      <div className="flex flex-col">
                  <AdminProductSearch />

        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg bg-zinc-300">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Producto
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Precio
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
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
                          <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-10 h-10 rounded-full" src={product.image} alt="" />
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
                        <span className="inline-flex px-2 text-xs font-semibold text-green-800 bg-green-100 rounded-full leading-5">
                          10 kg
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{product.description}</td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        
                        <button onClick={() => loadDetails(true) }  type="button" className="px-3 py-2 m-1 text-xs rounded-full shadow-xl bg-zinc-800 text-zinc-300 shadow-zinc-400/50"> 
                          Modificar </button>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {  loaded && <AdminProductDetails  current_product={current_product} /> } 
      </div>
    )
  }
  
    
    export default  AdminProducts;


