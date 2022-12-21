import { FC } from 'react';
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/outline';

import useAppActions from '@hooks/useAppActions';
import Counter from './Counter';

type Props = { product: CartProductType };

const CartProduct: FC<Props> = ({ product }) => {
  const { _id, title, quantity, total, suitableForInfo, selectedSize, selectedExtras } = product;
  const { label: sizeLabel, price } = selectedSize;

  const { removeFromCart, changeCartProductQuantity } = useAppActions();

  const getSubtotal = () => {
    if (!product || !selectedSize) return 0;
    let extrasPrice = 0;

    selectedExtras.map((extra) => {
      if (extra.price) {
        extrasPrice += extra.price;
        return extra;
      } else {
        return extra;
      }
    });

    const total = selectedSize.price + extrasPrice;
    return total;
  };

  return (
    <div className="flex w-full mt-1">
      <div className={`relative flex w-full flex-col justify-between border-b-2 border-gray-300`}>
        <div className="flex items-center justify-between mx-2">
          <div className="mt-2 text-lg font-semibold">{title.toUpperCase()}</div>
          <button className="w-6 h-6 cursor-pointer" onClick={() => removeFromCart(_id)}>
            <TrashIcon color="red" />
          </button>
        </div>
        <div className="flex items-center justify-between mx-2">
          <div className="">
            {sizeLabel && <div className="">{`${sizeLabel} - €${price.toFixed(2)}`}</div>}
            {selectedExtras.length >0 &&
              selectedExtras.map((extra) => (
                <div className="">{`${extra.label} - €${extra.price.toFixed(2)}`}</div>
              ))}
            {quantity && (
              <div className="mt-2 font-bold">
                Subtotal:
                <div className="font-regular">{`€${getSubtotal().toFixed(2)} x ${quantity} ${
                  quantity > 1 ? 'unidades' : 'unidad'
                }`}</div>
              </div>
            )}
          </div>
          <div className="flex items-end justify-center h-full text-2xl text-gray-700">{`€${total.toFixed(
            2
          )}`}</div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
