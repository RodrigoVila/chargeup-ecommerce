import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'

import { Button } from '@packages/button'

import { useAppActions } from '~hooks'
import { ProductType } from '@packages/types'

import { RoundImage } from './RoundImage'
import { useIntl } from 'react-intl'

type ProductProps = {
  product: ProductType
}

export const Product = ({ product }: ProductProps) => {
  const [isMounted, setMounted] = useState(false)

  const { title, description, nutritionalInfo, suitableForInfo, imgUri } = product
  const { weight, calories, carbs, fat, protein } = nutritionalInfo
  const { glutenFree, keto, vegan, protein: highProtein } = suitableForInfo

  const { openExtrasModal, openProductModal } = useAppActions()

  const { formatMessage } = useIntl()

  const onClickSeeMore = () => openProductModal(product)
  const onClickSelect = () => openExtrasModal(product)

  const iconStyle = 'relative h-11 w-11'

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {isMounted ? <ReactTooltip /> : null}
      <div className='2xs:rounded-xl xs:mx-2 lg:max-w-360 mb-4 mt-32 flex w-full max-w-sm flex-col items-center justify-end bg-black text-white lg:mx-8'>
        <div className='relative flex h-full flex-col justify-end px-6 pb-6'>
          <div className='mb-8 flex h-32 w-full items-center justify-center bg-black'>
            {imgUri && <RoundImage imgUri={imgUri} />}
          </div>
          <div className='font-dinMedium text-lg font-semibold md:text-2xl'>
            {title.toUpperCase()}
          </div>
          <div className='my-3 flex text-sm font-semibold md:text-base'>
            {vegan && (
              <div className={`${iconStyle} mr-1`} data-tip='Vegano'>
                <Image src='/icons/vegan-white.png' alt='Vegan icon' layout='fill' />
              </div>
            )}
            {highProtein && (
              <div className={`${iconStyle} mx-1`} data-tip='Alto en proteina'>
                <Image src='/icons/high-protein-white.svg' alt='High protein icon' layout='fill' />
              </div>
            )}
            {glutenFree && (
              <div className={`${iconStyle} mx-1`} data-tip='Gluten Free'>
                <Image src='/icons/gluten-free-white.png' alt='Gluten Free icon' layout='fill' />
              </div>
            )}
            {keto && (
              <div className={`${iconStyle} mx-1`} data-tip='Keto'>
                <Image src='/icons/keto-white.svg' alt='Keto icon' layout='fill' />
              </div>
            )}
          </div>
          <div className='cursor-pointer text-base' onClick={onClickSeeMore}>
            {description?.short}
          </div>
          {/* text-[#a855f7] */}
          <button
            className='text-md flex cursor-pointer self-start text-left text-orange-400 md:text-lg'
            onClick={onClickSeeMore}
          >
            {formatMessage({ id: 'SEE_MORE' })}
          </button>
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
                  <Image src='/icons/kcal-white.svg' layout='fill' alt='calories' />
                </div>
                <div className='ml-1 text-center'>{calories}</div>
              </div>
              {/* Carbs */}
              <div className='flex flex-col items-center justify-center'>
                <div className={iconStyle} data-tip={formatMessage({ id: 'PRODUCTS_CARBS' })}>
                  <Image src='/icons/carbs-white.png' layout='fill' alt='carbs' />
                </div>
                <div className='ml-1 text-center'>{carbs}</div>
              </div>
              {/* Protein */}
              <div className='flex flex-col items-center justify-center'>
                <div className={iconStyle} data-tip={formatMessage({ id: 'PRODUCTS_PROTEIN' })}>
                  <Image src='/icons/protein-white.svg' layout='fill' alt='High Protein' />
                </div>
                <div className='ml-1 text-center'>{protein}</div>
              </div>
              {/* Fats */}
              <div className='flex flex-col items-center justify-center'>
                <div className={iconStyle} data-tip={formatMessage({ id: 'PRODUCTS_FATS' })}>
                  <Image src='/icons/fat-white.png' layout='fill' alt='healthy fats' />
                </div>
                <div className='ml-1 text-center'>{fat}</div>
              </div>
            </div>
          </div>
          <Button onClick={onClickSelect} className='uppercase'>
            {formatMessage({ id: 'PRODUCTS_SELECT_PRODUCT' })}
          </Button>
        </div>
      </div>
    </>
  )
}

export default Product
