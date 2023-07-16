import { ChangeEvent, useState } from 'react';
import ReactTooltip from 'react-tooltip';

import useAppActions from '@hooks/useAppActions';
import useMounted from '@hooks/useMounted';

import { TrashIcon } from '@heroicons/react/24/outline';
import CloseModalButton from '@shared/Buttons/CloseModalButton';
import Image from 'next/image';
import { ProductType } from 'types';

interface Props {
  product: ProductType;
}

// TODO: Hacer un section style compartido

const AdminProductDetails = ({ product }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState<ProductType>(product);

  const { closeDrawerModal } = useAppActions();

  const { isMounted } = useMounted();

  const { _id, title, description, nutritionalInfo, suitableForInfo, price, imgUri } = product;

  const handleEdit = () => setIsEdit(true);

  const handleSaveChanges = () => setIsEdit(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((currProduct) => ({ ...currProduct, [name]: value }));
  };

  const handleLongDescChange = (e: ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const { value } = e.target;
    const newLongDescription = editedProduct.description.long.map((p, i) => {
      if (i === index) {
        return value;
      } else {
        return p;
      }
    });
    setEditedProduct((currProduct) => ({
      ...currProduct,
      description: {
        ...currProduct.description,
        long: newLongDescription,
      },
    }));
  };

  const removeProduct = () => {
    window.confirm('Desea eliminar el producto?') && console.log('DELETED!', id);
  };

  return (
    <div className="relative max-h-screen my-2 overflow-scroll bg-white rounded-md">
      {isMounted ? <ReactTooltip /> : null}
      <CloseModalButton
        color="black"
        onClose={closeDrawerModal}
        className="absolute z-30 right-2 top-2"
      />
      <div className="max-w-2xl px-4 py-2 mx-auto shadow-lg rounded-xl sm:py-8 sm:px-6 lg:max-w-xl lg:px-8">
        {isEdit ? (
          <input
            className="px-2 py-1 border-2 border-green-500"
            type="text"
            placeholder={title}
            onChange={handleChange}
          />
        ) : (
          <h2 className="py-2 text-2xl font-extrabold tracking-tight text-gray-900 border-b border-solid border-violet-500">
            {title}
          </h2>
        )}

        <div className="mt-6 align-middle">
          <div key={_id} className="relative group">
            <div className="object-center w-32 h-32 align-middle rounded-md shadow-xl bg-gray-25">
              <Image
                src={`/images/${imageSrc}`}
                alt={'imageAlt'}
                className="object-center align-middle"
              />
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">
                  Precio:
                </h3>
                <div className="my-2 text-gray-500">
                  {' '}
                  <span className="font-bold">{price.reg}</span> ({'unit'})
                </div>

                {/* Short Description */}
                <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">
                  Descripcion corta:
                </h3>
                {isEdit ? (
                  <input
                    className="px-2 py-1 border-2 border-green-500"
                    type="text"
                    value={description.short}
                    onChange={handleChange}
                  />
                ) : (
                  <div className="my-2 text-gray-500"> {description.short}</div>
                )}

                {/* Long Description */}
                <h3 className="py-2 text-sm font-bold text-gray-700 border-b border-solid border-zinc-300">
                  Descripcion larga:
                </h3>
                {isEdit ? (
                  description.long.map((paragraph, index) => (
                    <textarea
                      key={index}
                      className="px-2 py-1 border-2 border-green-500"
                      value={paragraph}
                      onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                        handleLongDescChange(event, index)
                      }
                    />
                  ))
                ) : (
                  <div className="my-2 text-gray-500">
                    {description.long.map((p, i) => (
                      <p key={i} className="my-2">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between object-center w-full py-4 my-2 align-middle border-t border-solid border-gray200">
            <button
              className={`${
                isEdit ? 'bg-pink-700' : 'bg-violet-700'
              } mr-8 rounded-lg py-2 px-4 text-gray-200 shadow-xl shadow-violet-700/30 hover:text-gray-50`}
              onClick={isEdit ? handleSaveChanges : handleEdit}
            >
              {isEdit ? 'Guardar Cambios' : 'Editar Producto'}
            </button>
            {isEdit && (
              <button
                className="w-6 h-6 cursor-pointer"
                onClick={removeProduct}
                data-tip="Eliminar Producto"
              >
                <TrashIcon color="red" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetails;
