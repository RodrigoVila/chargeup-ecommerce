import { FC } from 'react';
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/outline';

import useAppActions from '@hooks/useAppActions';
import Counter from './Counter';

const CartProduct: FC<ProductType> = ({
  id,
  title,
  description,
  nutritionalInfo,
  suitableForInfo,
  price,
  quantity,
  imgUri,
  strapiId,
}) => {
  const { removeFromCart, changeCartProductQuantity } = useAppActions();

  const addOne = () => changeCartProductQuantity(id, quantity + 1);

  const subtractOne = () => (quantity > 1 ? changeCartProductQuantity(id, quantity - 1) : null);

  return (
    <div className="flex w-full">
      <div className="relative w-1/3 border-b-2 border-white h-28 3xs:hidden xs:flex">
        <Image className="" objectFit="cover" layout="fill" src={`/${imgUri}.jpg`} alt="" />
      </div>
      <div className={`relative flex w-full flex-col justify-between border-b-2 border-gray-300`}>
        <div className="flex items-center justify-between mx-2">
          <div className="text-lg font-semibold">
            {title.toUpperCase()} <span className="text-2xl font-semibold"> €{price}</span>
          </div>
          <button className="w-6 h-6 cursor-pointer" onClick={() => removeFromCart(id)}>
            <TrashIcon color="red" />
          </button>
        </div>
        <div className="flex my-1 ml-2">
          {suitableForInfo.vegan && (
            <div className="relative w-10 h-10" data-tip="Apto Vegano">
              <Image src="/icons/vegan.svg" layout="fill" />
            </div>
          )}
          {suitableForInfo.protein && (
            <div className="relative w-10 h-10" data-tip="Alto contenido de proteina">
              <Image src="/icons/high-protein.svg" layout="fill" />
            </div>
          )}
          {suitableForInfo.glutenFree && (
            <div className="relative w-10 h-10" data-tip="Gluten Free">
              <Image src="/icons/gluten-free.svg" layout="fill" />
            </div>
          )}
          {suitableForInfo.keto && (
            <div className="relative w-10 h-10" data-tip="Keto">
              <Image src="/icons/keto.svg" layout="fill" />
            </div>
          )}
        </div>

        <div className="relative flex items-center justify-between mx-2 ">
          <div className="flex items-center justify-center h-full mb-1 text-xl text-gray-700">
            Cantidad:{' '}
            <Counter
              count={quantity}
              addOne={addOne}
              subtractOne={subtractOne}
              color="black"
            />
          </div>
          <div className="flex items-center justify-center h-full text-2xl text-gray-700">{`€${
            price * quantity
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
