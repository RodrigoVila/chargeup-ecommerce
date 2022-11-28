import useAppActions from '@hooks/useAppActions';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import React, { useState } from 'react';

interface Props {
  product: ProductType;
}

const AdminProductDetails = ({ product }: Props) => {
  const [isEdit, setIsEdit] = useState(false);

  const { closeDrawerModal } = useAppActions();

  const {
    id,
    title,
    description,
    nutritionalInfo,
    suitableForInfo,
    price,
    priceLabel,
    priceExtras,
    imgUri,
  } = product;

  const handleEdit = () => setIsEdit(true);

  const handleSaveChanges = () => setIsEdit(false);

  return (
    <div className="relative my-2 bg-white">
      <CloseModalButton color="red" onClose={closeDrawerModal} isAbsolute position='right' className='z-30' />
      <div className="max-w-2xl px-4 py-2 mx-auto shadow-lg rounded-xl sm:py-8 sm:px-6 lg:max-w-xl lg:px-8">
        <h2 className="py-2 text-2xl font-extrabold tracking-tight text-gray-900 border-b border-solid border-violet-500">
          {title}
        </h2>

        <div className="mt-6 align-middle">
          <div key={id} className="relative group">
            <div className="object-center w-32 h-32 align-middle rounded-md shadow-xl bg-gray-25">
              <img src={'imageSrc'} alt={'imageAlt'} className="object-center align-middle" />
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">
                  Nombre de Producto:
                </h3>
                {isEdit ? (
                  <input
                    className="px-2 py-1 border-2 border-green-500"
                    type="text"
                    value={'name'}
                    onChange={() => {}}
                  />
                ) : (
                  <div className="my-2 text-gray-500"> {'name'} </div>
                )}

                <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">
                  Stock:
                </h3>
                <div className="my-2 text-gray-500">
                  {' '}
                  {'stock'}
                  {'unit'}
                </div>

                <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">
                  Precio:
                </h3>
                <div className="my-2 text-gray-500">
                  {' '}
                  <span className="font-bold">{price}</span> ({'unit'})
                </div>

                <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">
                  Descripcion:
                </h3>
                <div className="my-2 text-gray-500"> {description.short}</div>

                <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">
                  Última modificacion:
                </h3>
                <div className="my-2 text-gray-500"> {'last_update'}</div>
              </div>
            </div>
          </div>
          <div className="object-center py-4 my-2 align-middle border-t border-solid border-gray200">
            <button
              className={`${
                isEdit ? 'bg-pink-700' : 'bg-violet-700'
              } mr-8 rounded-lg py-2 px-4 text-gray-200 shadow-xl shadow-violet-700/30 hover:text-gray-50`}
              onClick={isEdit ? handleSaveChanges : handleEdit}
            >
              {isEdit ? 'Guardar Cambios' : 'Editar Producto'}
            </button>
            <button className="px-4 py-2 mr-4 text-gray-200 rounded-lg shadow-xl bg-violet-700 shadow-violet-700/30 hover:text-gray-50">
              {' '}
              Eliminar producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetails;
