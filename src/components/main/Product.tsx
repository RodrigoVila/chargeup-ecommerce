import { useState, FC } from 'react';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

import Button from '@main/Buttons/Button';
import Counter from '@main/Counter';
import RoundImage from '@main/RoundImage';
import { colors } from '@constants';
import useAppActions from '@hooks/useAppActions';
import useMounted from '@hooks/useMounted';

type Props = {
  product: ProductType;
  onClick: () => void;
};

const Product: FC<Props> = ({ product, onClick }) => {
  const [count, setCount] = useState(0);

  const {
    title,
    description,
    nutritionalInfo,
    suitableForInfo,
    price,
    priceLabel,
    priceExtras,
    imgUri,
  } = product;

  const { addToCart, displayInfoMessage, displaySuccessMessage } = useAppActions();
  const { isMounted } = useMounted();

  const addOne = () => setCount((prevCount) => prevCount + 1);

  const subtractOne = () => {
    if (count < 1) return 0;
    setCount((prevCount) => prevCount - 1);
  };

  const addItemToCart = () => {
    if (count === 0) {
      displayInfoMessage('La cantidad tiene que ser mayor a 0');
      return;
    }

    const cartProduct = {
      ...product,
      quantity: count,
    };

    addToCart(cartProduct);
    displaySuccessMessage('Producto agregado!');
  };

  const iconStyle = 'relative h-11 w-11';

  return (
    <>
      {isMounted ? <ReactTooltip /> : null}

      <div className="flex flex-col items-center justify-end w-full max-w-sm mt-32 mb-4 text-white bg-black 2xs:rounded-xl xs:mx-2 lg:mx-8 lg:max-w-360">
        <div className="relative flex flex-col justify-end h-full px-8 pb-4">
          <div className="flex items-center justify-center w-full h-32 mb-8 bg-black">
            {imgUri && <RoundImage imgUri={imgUri} />}
          </div>
          <div className="text-lg font-semibold font-dinMedium md:text-2xl">
            {title.toUpperCase()}
          </div>
          <div className="flex my-3 text-sm font-semibold md:text-base">
            {suitableForInfo.vegan && (
              <div className={`${iconStyle} mr-1`} data-tip="Vegano">
                <Image src="/icons/vegan-white.png" layout="fill" />
              </div>
            )}
            {suitableForInfo.protein && (
              <div className={`${iconStyle} mx-1`} data-tip="Alto en proteina">
                <Image src="/icons/high-protein-white.svg" layout="fill" />
              </div>
            )}
            {suitableForInfo.glutenFree && (
              <div className={`${iconStyle} mx-1`} data-tip="Gluten Free">
                <Image src="/icons/gluten-free-white.png" layout="fill" />
              </div>
            )}
            {suitableForInfo.keto && (
              <div className={`${iconStyle} mx-1`} data-tip="Keto">
                <Image src="/icons/keto-white.svg" layout="fill" />
              </div>
            )}
          </div>
          <div className="cursor-pointer text-md md:text-xl" onClick={onClick}>
            {description?.short}
          </div>
          {/* text-[#a855f7] */}
          <div
            className="font-semibold text-orange-400 cursor-pointer text-md md:text-xl"
            onClick={onClick}
          >
            ver +
          </div>
          <div className="flex flex-col my-4 text-md md:text-xl">
            <div className="mb-4">Info Nutricional:</div>
            <div className="flex items-center justify-between text-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-12 h-12" data-tip="Calorias">
                  <Image src="/icons/kcal-white.svg" layout="fill" />
                </div>
                <div className="ml-1 text-center">{nutritionalInfo.calories}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className={iconStyle} data-tip="Carbohidratos">
                  <Image src="/icons/carbs-white.png" layout="fill" />
                </div>
                <div className="ml-1 text-center">{nutritionalInfo.carbs}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className={iconStyle} data-tip="Proteina">
                  <Image src="/icons/protein-white.svg" layout="fill" />
                </div>
                <div className="ml-1 text-center">{nutritionalInfo.protein}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className={iconStyle} data-tip="Grasas saludables">
                  <Image src="/icons/fat-white.png" layout="fill" />
                </div>
                <div className="ml-1 text-center">{nutritionalInfo.fat}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="my-2 text-2xl font-semibold md:text-4xl">{`€${price}`}</div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full px-4 mb-4">
          <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
          <Button title="Agregar" color={colors.purple} onClick={addItemToCart} />
        </div>
      </div>
    </>
  );
};

export default Product;
