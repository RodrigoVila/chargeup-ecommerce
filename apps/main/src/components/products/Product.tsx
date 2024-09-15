import Image from 'next/legacy/image'
import { Tooltip } from 'react-tooltip'
import { useIntl } from 'react-intl'

import veganIcon from '@packages/assets/icons/vegan-white.png'
import gfIcon from '@packages/assets/icons/gluten-free-white.png'
import highProteinWhite from '@packages/assets/icons/high-protein-white.svg'
import ketoIcon from '@packages/assets/icons/keto-white.svg'
import kcalIcon from '@packages/assets/icons/kcal-white.svg'
import carbsIcon from '@packages/assets/icons/carbs-white.png'
import proteinIcon from '@packages/assets/icons/protein-white.svg'
import fatsIcon from '@packages/assets/icons/fat-white.png'

import { ProductType } from '@packages/types'

import { RoundImage } from './RoundImage'
import { ProductDescModal } from './ProductDescModal'
import { ProductExtrasModal } from './ProductExtrasModal'

export type ProductProps = {
  product: ProductType
}

export const Product = ({ product }: ProductProps) => {
  const { title, description, nutritionalInfo, suitableForInfo, imgUri } = product
  const { weight, calories, carbs, fat, protein } = nutritionalInfo
  const { glutenFree, keto, vegan, protein: highProtein } = suitableForInfo

  const { formatMessage } = useIntl()

  const iconStyle = 'relative h-11 w-11'

  return (
    <>
      <Tooltip />
      <div className='2xs:rounded-xl xs:mx-2 lg:max-w-360 mb-4 mt-32 flex w-full max-w-sm flex-col items-center justify-end bg-black text-white lg:mx-8'>
        <div className='relative flex h-full flex-col justify-start px-6 pb-6'>
          <div className='mb-8 flex h-32 w-full items-center justify-center bg-black'>
            {imgUri && <RoundImage imgUri={imgUri} />}
          </div>
          <div className='font-dinMedium text-lg font-semibold md:text-2xl'>
            {title.toUpperCase()}
          </div>
          <div className='my-3 flex text-sm font-semibold md:text-base'>
            {vegan && (
              <div className={`${iconStyle} mr-1`} data-tip='Vegano'>
                <Image src={veganIcon} alt='Vegan icon' layout='fill' />
              </div>
            )}
            {highProtein && (
              <div className={`${iconStyle} mx-1`} data-tip='Alto en proteina'>
                <Image src={highProteinWhite} alt='High protein icon' layout='fill' />
              </div>
            )}
            {glutenFree && (
              <div className={`${iconStyle} mx-1`} data-tip='Gluten Free'>
                <Image src={gfIcon} alt='Gluten Free icon' layout='fill' />
              </div>
            )}
            {keto && (
              <div className={`${iconStyle} mx-1`} data-tip='Keto'>
                <Image src={ketoIcon} alt='Keto icon' layout='fill' />
              </div>
            )}
          </div>

          <ProductDescModal product={product} />

          {/* Nutritional Info */}
          <div className='my-4 flex flex-col'>
            <div className='mb-4 text-base'>{`${formatMessage({
              id: 'FOR_EVERY',
            })} ${weight}gr:`}</div>
            <div className='flex items-center justify-between text-lg'>
              <div className='flex flex-col items-center justify-center'>
                {/* Calories */}
                <div
                  className='relative h-12 w-12'
                  data-tip={formatMessage({ id: 'PRODUCTS_CALORIES' })}
                >
                  <Image src={kcalIcon} layout='fill' alt='calories' />
                </div>
                <div className='ml-1 text-center'>{calories}</div>
              </div>
              {/* Carbs */}
              <div className='flex flex-col items-center justify-center'>
                <div className={iconStyle} data-tip={formatMessage({ id: 'PRODUCTS_CARBS' })}>
                  <Image src={carbsIcon} layout='fill' alt='carbs' />
                </div>
                <div className='ml-1 text-center'>{carbs}</div>
              </div>
              {/* Protein */}
              <div className='flex flex-col items-center justify-center'>
                <div className={iconStyle} data-tip={formatMessage({ id: 'PRODUCTS_PROTEIN' })}>
                  <Image src={proteinIcon} layout='fill' alt='High Protein' />
                </div>
                <div className='ml-1 text-center'>{protein}</div>
              </div>
              {/* Fats */}
              <div className='flex flex-col items-center justify-center'>
                <div className={iconStyle} data-tip={formatMessage({ id: 'PRODUCTS_FATS' })}>
                  <Image src={fatsIcon} layout='fill' alt='healthy fats' />
                </div>
                <div className='ml-1 text-center'>{fat}</div>
              </div>
            </div>
          </div>
          {/* "Select" button */}
          <div className='mt-auto'>
            <ProductExtrasModal product={product} />
          </div>
        </div>
      </div>
    </>
  )
}
