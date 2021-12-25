import React, { useState } from 'react'
import current_product from './AdminProductsListJP'


const products = [
  {
    id: 1,
    name: 'Nueces Pecan BIO origen Francia, Paris.',
    description: 'Nueces Pecan BIO origen Francia, Paris. Batch#02665 .Proovedor: Catalunya Seeds (Barcelona)',
    imageSrc: 'https://cdn.shopify.com/s/files/1/1699/9375/files/la-nuez-pecan-ayuda-a-adelgazar_large.jpg?v=1499651301',
    imageAlt: "Producto",
    price: '$18.55',
    stock: 10,
    unidad: "Kg",
    last_update:"20/12/2021 12:29pm"
  },
  // More products...
]


function AdminProductJP(props) {
  
  return (
      <div className="bg-white my-2">
        <div className="max-w-2xl mx-auto py-2 px-4 sm:py-8 sm:px-6 rounded-xl lg:max-w-xl lg:px-8 shadow-lg">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 border-b border-solid border-violet-500 py-2">{ props.current_product }</h2>

          <div className="mt-6 align-middle">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="bg-gray-25 w-32 h-32 object-center align-middle rounded-md shadow-xl">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-center align-middle"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-bold border-solid border-b border-zinc-300 py-2">Nombre de Producto:</h3>
                        <div className='text-gray-500 my-2'> {product.name} </div>

                    <h3 className="text-sm text-gray-700 font-bold border-solid border-b border-zinc-300 py-2">Stock:</h3>
                      <div className="text-gray-500 my-2"> {product.stock}{ product.unidad}</div>

                    <h3 className="text-sm text-gray-700 font-bold border-solid border-b border-zinc-300 py-2">Precio:</h3>  
                      <div className="text-gray-500 my-2"> <span className='font-bold'>{product.price}</span> ({ product.unidad})</div>

                    <h3 className="text-sm text-gray-700 font-bold border-solid border-b border-zinc-300 py-2">Descripcion:</h3>  
                      <div className="text-gray-500 my-2"> { product.description}</div>

                    <h3 className="text-sm text-gray-700 font-bold border-solid border-b border-zinc-300 py-2">Última modificacion:</h3>  
                      <div className="text-gray-500 my-2"> { product.last_update}</div> 
                  </div>
                </div>
              </div>
            ))}
            <div className='object-center align-middle border-t border-solid border-gray200 my-2 py-4'>
              <button className='text-gray-200 hover:text-gray-50 bg-violet-700 rounded-lg shadow-xl shadow-violet-700/30 py-2 px-4 mr-8'>Editar Producto</button>
              <button className='text-gray-200 hover:text-gray-50 bg-violet-700 rounded-lg shadow-xl shadow-violet-700/30 py-2 px-4 mr-4'> Eliminar producto</button>
            </div>

          </div>
        </div>
      </div>  
  )
}

export default AdminProductJP;
