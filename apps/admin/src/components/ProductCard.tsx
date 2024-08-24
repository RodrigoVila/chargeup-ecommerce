import { useEffect, useState } from 'react'
import { BsPencil, BsTrash } from 'react-icons/bs'
import { Button } from '@packages/button'
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
  console.log(imgUri)
  const { calories, carbs, fat, protein } = nutritionalInfo
  const { glutenFree, keto, vegan, protein: highProtein } = suitableForInfo

  const iconStyle = 'h-10 w-10'

  return (
    <div className='max-h-72 w-full max-w-2xl overflow-hidden rounded-xl bg-slate-800 text-white shadow-md'>
      <div className='flex max-h-72'>
        <div className=''>
          {imgUri && (
            <LazyImage
              src={IMG_MAPPER[imgUri]}
              alt={title}
              className='h-72 w-96 bg-center bg-no-repeat'
            />
          )}
        </div>
        <div className='flex w-2/3 flex-col gap-4 py-2 pl-4'>
          <div className='text-3xl font-bold'>{title}</div>
          <div className='flex gap-2'>
            {vegan && (
              <div className={iconStyle} data-tip='Vegan'>
                <img src={veganIcon} alt='Vegan icon' />
              </div>
            )}
            {highProtein && (
              <div className={iconStyle} data-tip='High Protein'>
                <img src={proteinIcon} alt='High protein icon' />
              </div>
            )}
            {glutenFree && (
              <div className={iconStyle} data-tip='Gluten Free'>
                <img src={gfIcon} alt='Gluten Free icon' />
              </div>
            )}
            {keto && (
              <div className={iconStyle} data-tip='Keto'>
                <img src={ketoIcon} alt='Keto icon' />
              </div>
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
        <div className='m-2 flex gap-4'>
          <div className='group self-start'>
            <button
              onClick={() => onEdit(product)}
              className='self-start rounded-full p-[6px] group-hover:bg-blue-500'
              data-tip='Edit product'
            >
              <BsPencil size={18} className='group-hover:text-white' />
            </button>
          </div>
          <div className='group'>
            <button
              onClick={() => onDelete(product)}
              className='self-start rounded-full p-[6px] duration-300 group-hover:bg-red-500'
              data-tip='Delete product'
            >
              <BsTrash size={18} className='group-hover:white duration-300' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
