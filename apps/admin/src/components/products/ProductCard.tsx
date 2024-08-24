import { Tooltip } from 'react-tooltip'
import { BsPencil } from 'react-icons/bs'
import { IoTrashOutline } from 'react-icons/io5'

import { ProductType } from '@packages/types'
import { LazyImage } from '@packages/lazy-image'

import veganIcon from '@packages/assets/icons/vegan-white.png'
import proteinIcon from '@packages/assets/icons/protein-white.svg'
import gfIcon from '@packages/assets/icons/gluten-free-white.png'
import ketoIcon from '@packages/assets/icons/keto-white.svg'

import brownieImg from '@packages/assets/images/brownie-avocado-fresa.jpg'
import bananaBreadImg from '@packages/assets/images/banana-bread.jpg'
import chocoBarsImg from '@packages/assets/images/choco-bars.jpg'
import cinnamonRollsImg from '@packages/assets/images/cinnamon-rolls.jpg'
import energyBallsImg from '@packages/assets/images/energy-balls.jpg'
import energyBarsImg from '@packages/assets/images/energy-bars.jpg'
import brownieAvellanasImg from '@packages/assets/images/keto-brownie-avellanas.jpg'
import proteinBreadImg from '@packages/assets/images/keto-protein-bread.jpg'
import matchaBreadImg from '@packages/assets/images/matcha-bread.jpg'
import peanutBallsImg from '@packages/assets/images/peanut-balls.jpg'
import strawberriesCookiesImg from '@packages/assets/images/strawberry-cookies-tea.jpg'

import { ActionsMenu } from '../ActionsMenu'
import { Action } from '../Table'

type ProductCardProps = {
  product: ProductType
  onEdit: (product: ProductType) => void
  onDelete: (product: ProductType) => void
}

const IMG_MAPPER: Record<string, string> = {
  'brownie-avocado-fresa': brownieImg,
  'banana-bread': bananaBreadImg,
  'choco-bars': chocoBarsImg,
  'cinnamon-rolls': cinnamonRollsImg,
  'energy-balls': energyBallsImg,
  'energy-bars': energyBarsImg,
  'keto-brownie-avellanas': brownieAvellanasImg,
  'keto-protein-bread': proteinBreadImg,
  'matcha-bread': matchaBreadImg,
  'peanut-balls': peanutBallsImg,
  'strawberry-cookies-tea': strawberriesCookiesImg,
}

export const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
  const { title, description, nutritionalInfo, suitableForInfo, imgUri } = product
  const { calories, carbs, fat, protein } = nutritionalInfo
  const { glutenFree, keto, vegan, protein: highProtein } = suitableForInfo

  const iconStyle = 'h-10 w-10'

  const actions: Action[] = [
    {
      label: 'Edit product',
      icon: <BsPencil />,
      onClick: () => onEdit(product),
    },
    {
      label: 'Delete product',
      icon: <IoTrashOutline className='text-red-500' />,
      onClick: () => onDelete(product),
    },
  ]

  return (
    <>
      <div className='w-full max-w-2xl overflow-hidden rounded-xl bg-slate-800 text-white shadow-md'>
        <div className='flex max-h-52'>
          <div className=''>
            {imgUri && (
              <LazyImage
                src={IMG_MAPPER[imgUri]}
                alt={title}
                className='h-56 w-52 bg-center bg-no-repeat'
              />
            )}
          </div>
          <div className='flex w-2/3 flex-col gap-4 py-2 pl-4'>
            <div className='text-3xl font-bold'>{title}</div>
            <div className='flex gap-2'>
              {vegan && (
                <a
                  className={iconStyle}
                  data-tooltip-id='product-card-tooltip'
                  data-tooltip-content='Vegan'
                >
                  <img src={veganIcon} className={iconStyle} alt='Vegan icon' />
                </a>
              )}
              {highProtein && (
                <a data-tooltip-id='product-card-tooltip' data-tooltip-content='High Protein'>
                  <img src={proteinIcon} className={iconStyle} alt='High protein icon' />
                </a>
              )}
              {glutenFree && (
                <a
                  className={iconStyle}
                  data-tooltip-id='product-card-tooltip'
                  data-tooltip-content='Gluten Free'
                >
                  <img src={gfIcon} className={iconStyle} alt='Gluten Free icon' />
                </a>
              )}
              {keto && (
                <a
                  className={iconStyle}
                  data-tooltip-id='product-card-tooltip'
                  data-tooltip-content='Keto'
                >
                  <img src={ketoIcon} className={iconStyle} alt='Keto icon' />
                </a>
              )}
            </div>
            <p className='text-base text-gray-400'>{description.short}</p>
            <div className='mt-auto flex gap-4 text-lg'>
              <div className='flex flex-col items-center'>
                <div className='text-sm text-gray-400'>Calories</div>
                <div>{calories}</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-sm text-gray-400'>Carbs</div>
                <div>{carbs}g</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-sm text-gray-400'>Protein</div>
                <div>{protein}g</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-sm text-gray-400'>Fat</div>
                <div>{fat}g</div>
              </div>
            </div>
          </div>
          <div className='m-2'>
            <ActionsMenu actions={actions} />
          </div>
        </div>
      </div>
      <Tooltip id='product-card-tooltip' />
    </>
  )
}

export default ProductCard