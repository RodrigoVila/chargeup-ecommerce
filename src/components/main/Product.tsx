import { FC } from 'react';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

import Button from '@main/Buttons/Button';
import Counter from '@main/Counter';
import RoundImage from '@main/RoundImage';
import { colors } from '@constants/colors';
import useAppActions from '@hooks/useAppActions';
import useMounted from '@hooks/useMounted';
import Dropdown from './Dropdown';
import PreCartModal from './Modal/ExtrasModal';

type Props = {
  product: ProductType;
};

const Product: FC<Props> = ({ product }) => {
  const { _id, title, description, nutritionalInfo, suitableForInfo, imgUri } =
    product;
  const { weight, calories, carbs, fat, protein } = nutritionalInfo;
  const { glutenFree, keto, vegan, protein: highProtein } = suitableForInfo;

  const { isMounted } = useMounted();
  const { openExtrasModal,openProductModal } = useAppActions();

  const onClickSeeMore = () => openProductModal(product)
  const onClick = () => openExtrasModal(product)

  const iconStyle = 'relative h-11 w-11';

  return (
    <>
      {isMounted ? <ReactTooltip /> : null}
      <div className="flex flex-col items-center justify-end w-full max-w-sm mt-32 mb-4 text-white bg-black 2xs:rounded-xl xs:mx-2 lg:mx-8 lg:max-w-360">
        <div className="relative flex flex-col justify-end h-full px-6 pb-6">
          <div className="flex items-center justify-center w-full h-32 mb-8 bg-black">
            {imgUri && <RoundImage imgUri={imgUri} />}
          </div>
          <div className="text-lg font-semibold font-dinMedium md:text-2xl">
            {title.toUpperCase()}
          </div>
          <div className="flex my-3 text-sm font-semibold md:text-base">
            {vegan && (
              <div className={`${iconStyle} mr-1`} data-tip="Vegano">
                <Image src="/icons/vegan-white.png" alt="Vegan icon" layout="fill" />
              </div>
            )}
            {highProtein && (
              <div className={`${iconStyle} mx-1`} data-tip="Alto en proteina">
                <Image src="/icons/high-protein-white.svg" alt="High protein icon" layout="fill" />
              </div>
            )}
            {glutenFree && (
              <div className={`${iconStyle} mx-1`} data-tip="Gluten Free">
                <Image src="/icons/gluten-free-white.png" alt="Gluten Free icon" layout="fill" />
              </div>
            )}
            {keto && (
              <div className={`${iconStyle} mx-1`} data-tip="Keto">
                <Image src="/icons/keto-white.svg" alt="Keto icon" layout="fill" />
              </div>
            )}
          </div>
          <div className="text-base cursor-pointer" onClick={onClick}>
            {description?.short}
          </div>
          {/* text-[#a855f7] */}
          <button
            className="flex self-start text-left text-orange-400 cursor-pointer text-md md:text-lg"
            onClick={onClickSeeMore}
          >
            ver +
          </button>
          {/* Nutritional Info */}
          <div className="flex flex-col my-4">
            <div className="mb-4 text-base">{`Por cada ${weight}gr:`}</div>
            <div className="flex items-center justify-between text-lg">
              <div className="flex flex-col items-center justify-center">
                {/* Calories */}
                <div className="relative w-12 h-12" data-tip="Calorias">
                  <Image src="/icons/kcal-white.svg" layout="fill" />
                </div>
                <div className="ml-1 text-center">{calories}</div>
              </div>
              {/* Carbs */}
              <div className="flex flex-col items-center justify-center">
                <div className={iconStyle} data-tip="Carbohidratos">
                  <Image src="/icons/carbs-white.png" layout="fill" />
                </div>
                <div className="ml-1 text-center">{carbs}</div>
              </div>
              {/* Protein */}
              <div className="flex flex-col items-center justify-center">
                <div className={iconStyle} data-tip="Proteina">
                  <Image src="/icons/protein-white.svg" layout="fill" />
                </div>
                <div className="ml-1 text-center">{protein}</div>
              </div>
              {/* Fats */}
              <div className="flex flex-col items-center justify-center">
                <div className={iconStyle} data-tip="Grasas saludables">
                  <Image src="/icons/fat-white.png" layout="fill" />
                </div>
                <div className="ml-1 text-center">{fat}</div>
              </div>
            </div>
          </div>
          <Button title="Seleccionar" onClick={onClick} />
        </div>
      </div>
    </>
  );
};

export default Product;
