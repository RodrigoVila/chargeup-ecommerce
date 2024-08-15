import { ChangeEvent, useState } from 'react'

import Image from 'next/image'
import { ProductType } from '@packages/types'

type AdminProductDetailsProps = {
  product: ProductType
}

const AdminProductDetails = ({ product }: AdminProductDetailsProps) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editedProduct, setEditedProduct] = useState<ProductType>(product)

  const { _id, title, description, imgUri } = product

  const handleEdit = () => setIsEdit(true)

  const handleSaveChanges = () => setIsEdit(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedProduct((currProduct) => ({ ...currProduct, [name]: value }))
  }

  const handleLongDescChange = (e: ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const { value } = e.target
    const newLongDescription = editedProduct.description.long.map((p, i) => {
      if (i === index) {
        return value
      } else {
        return p
      }
    })
    setEditedProduct((currProduct) => ({
      ...currProduct,
      description: {
        ...currProduct.description,
        long: newLongDescription,
      },
    }))
  }

  const removeProduct = () => {
    window.confirm('Desea eliminar el producto?') && console.log('DELETED!', _id)
  }

  return (
    <div className='relative my-2 max-h-screen overflow-scroll rounded-md bg-white'>
      {/* {isMounted ? <ReactTooltip /> : null}
      <CloseModalButton
        color='black'
        onClose={closeDrawerModal}
        className='absolute right-2 top-2 z-30'
      /> */}
      <div className='mx-auto max-w-2xl rounded-xl px-4 py-2 shadow-lg sm:px-6 sm:py-8 lg:max-w-xl lg:px-8'>
        {isEdit ? (
          <input
            className='border-2 border-green-500 px-2 py-1'
            type='text'
            placeholder={title}
            onChange={handleChange}
          />
        ) : (
          <h2 className='border-b border-solid border-violet-500 py-2 text-2xl font-extrabold tracking-tight text-gray-900'>
            {title}
          </h2>
        )}

        <div className='mt-6 align-middle'>
          <div key={_id} className='group relative'>
            <div className='bg-gray-25 h-32 w-32 rounded-md object-center align-middle shadow-xl'>
              <Image
                src={`/images/${imgUri}`}
                alt={'imageAlt'}
                className='object-center align-middle'
              />
            </div>
            <div className='mt-4 flex justify-between'>
              <div>
                <h3 className='border-b border-solid border-zinc-300 py-2 text-sm font-bold text-gray-700'>
                  Precio:
                </h3>
                <div className='my-2 text-gray-500'>
                  <span className='font-bold'>0</span>
                </div>

                {/* Short Description */}
                <h3 className='border-b border-solid border-zinc-300 py-2 text-sm font-bold text-gray-700'>
                  Descripcion corta:
                </h3>
                {isEdit ? (
                  <input
                    className='border-2 border-green-500 px-2 py-1'
                    type='text'
                    value={description.short}
                    onChange={handleChange}
                  />
                ) : (
                  <div className='my-2 text-gray-500'> {description.short}</div>
                )}

                {/* Long Description */}
                <h3 className='border-b border-solid border-zinc-300 py-2 text-sm font-bold text-gray-700'>
                  Descripcion larga:
                </h3>
                {isEdit ? (
                  description.long.map((paragraph, index) => (
                    <textarea
                      key={index}
                      className='border-2 border-green-500 px-2 py-1'
                      value={paragraph}
                      onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                        handleLongDescChange(event, index)
                      }
                    />
                  ))
                ) : (
                  <div className='my-2 text-gray-500'>
                    {description.long.map((p, i) => (
                      <p key={i} className='my-2'>
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='border-gray200 my-2 flex w-full justify-between border-t border-solid object-center py-4 align-middle'>
            <button
              className={`${
                isEdit ? 'bg-pink-700' : 'bg-violet-700'
              } mr-8 rounded-lg px-4 py-2 text-gray-200 shadow-xl shadow-violet-700/30 hover:text-gray-50`}
              onClick={isEdit ? handleSaveChanges : handleEdit}
            >
              {isEdit ? 'Guardar Cambios' : 'Editar Producto'}
            </button>
            {isEdit && (
              <button
                className='h-6 w-6 cursor-pointer'
                onClick={removeProduct}
                data-tip='Eliminar Producto'
              >
                {/* <TrashIcon color='red' /> */}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProductDetails
