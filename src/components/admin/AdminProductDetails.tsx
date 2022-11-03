import React, { useState } from 'react'
import current_product from './AdminProducts'


const products = [
  {
    id: 1,
    name: 'Nueces Pecan BIO origen Francia, Paris.',
    description: 'Nueces Pecan BIO origen Francia, Paris. Batch#02665. Proovedor: Catalunya Seeds (Barcelona)',
    imageSrc: 'https://cdn.shopify.com/s/files/1/1699/9375/files/la-nuez-pecan-ayuda-a-adelgazar_large.jpg?v=1499651301',
    imageAlt: "Producto",
    price: '$18.55',
    stock: 10,
    unit: "Kg",
    last_update:"20/12/2021 12:29pm"
  },
  // More products...
]

const AdminProductDetails = (props) => {
  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = () => setIsEdit(true)

  const handleSaveChanges = () => setIsEdit(false)

  return (
      <div className="my-2 bg-white">
        <div className="max-w-2xl px-4 py-2 mx-auto shadow-lg sm:py-8 sm:px-6 rounded-xl lg:max-w-xl lg:px-8">
          <h2 className="py-2 text-2xl font-extrabold tracking-tight text-gray-900 border-b border-solid border-violet-500">{ props.current_product }</h2>

          <div className="mt-6 align-middle">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="object-center w-32 h-32 align-middle shadow-xl bg-gray-25 rounded-md">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-center align-middle"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">Nombre de Producto:</h3>
                    {isEdit ? <input className="px-2 py-1 border-2 border-green-500" type="text" value={product.name} onChange={()=>{}}/> : <div className='my-2 text-gray-500'> {product.name} </div> }
                        

                    <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">Stock:</h3>
                      <div className="my-2 text-gray-500"> {product.stock}{ product.unit}</div>

                    <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">Precio:</h3>  
                      <div className="my-2 text-gray-500"> <span className='font-bold'>{product.price}</span> ({ product.unit })</div>

                    <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">Descripcion:</h3>  
                      <div className="my-2 text-gray-500"> { product.description}</div>

                    <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">Última modificacion:</h3>  
                      <div className="my-2 text-gray-500"> { product.last_update}</div> 
                  </div>
                </div>
              </div>
            ))}
            <div className='object-center py-4 my-2 align-middle border-t border-solid border-gray200'>
              <button className={`${isEdit ? "bg-pink-700" : "bg-violet-700"} text-gray-200 hover:text-gray-50 rounded-lg shadow-xl shadow-violet-700/30 py-2 px-4 mr-8`} onClick={isEdit ? handleSaveChanges : handleEdit}>{isEdit ? "Guardar Cambios" : "Editar Producto"}</button>
              <button className='px-4 py-2 mr-4 text-gray-200 rounded-lg shadow-xl hover:text-gray-50 bg-violet-700 shadow-violet-700/30'> Eliminar producto</button>
            </div>

          </div>
        </div>
      </div>  
  )
}

export default AdminProductDetails;
