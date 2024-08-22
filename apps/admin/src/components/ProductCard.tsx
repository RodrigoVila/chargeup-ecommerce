import React from 'react'
import { BsPencil, BsTrash } from 'react-icons/bs'
import { IoCheckmark } from 'react-icons/io5'
import { Button } from '@packages/button'
import { ProductType } from '@packages/types'
import { LazyImage } from '@packages/lazy-image'

type ProductCardProps = {
  product: ProductType
  onEdit: (product: ProductType) => void
  onDelete: (product: ProductType) => void
}

export const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
  const { title, description, nutritionalInfo, suitableForInfo, imgUri } = product
  const { calories, carbs, fat, protein } = nutritionalInfo
  const { glutenFree, keto, vegan, protein: highProtein } = suitableForInfo

  const iconStyle = 'relative h-8 w-8'

  return (
    <div className='rounded-xl bg-slate-800 p-6 text-white shadow-md'>
      <div className='flex'>
        <div className='w-1/3'>
          <div className='mb-4 h-32 w-32'>
            {imgUri && <LazyImage src={imgUri} alt={title} width={128} height={128} />}
          </div>
        </div>
        <div className='w-2/3 pl-4'>
          <div className='mb-2 text-xl font-bold'>{title}</div>
          <div className='mb-4 flex'>
            {vegan && (
              <div className={`${iconStyle} mr-2`} data-tip='Vegan'>
                <img src='/icons/vegan-white.png' alt='Vegan icon' />
              </div>
            )}
            {highProtein && (
              <div className={`${iconStyle} mx-2`} data-tip='High Protein'>
                <img src='/icons/high-protein-white.svg' alt='High protein icon' />
              </div>
            )}
            {glutenFree && (
              <div className={`${iconStyle} mx-2`} data-tip='Gluten Free'>
                <img src='/icons/gluten-free-white.png' alt='Gluten Free icon' />
              </div>
            )}
            {keto && (
              <div className={`${iconStyle} mx-2`} data-tip='Keto'>
                <img src='/icons/keto-white.svg' alt='Keto icon' />
              </div>
            )}
          </div>
          <p className='text-sm text-gray-400'>{description.short}</p>
        </div>
      </div>
      <div className='mt-4 flex justify-between text-lg'>
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
      <div className='mt-6 flex justify-end gap-4'>
        <Button className='flex items-center gap-2' onClick={() => onEdit(product)}>
          <BsPencil />
          Edit
        </Button>
        <Button className='flex items-center gap-2 text-red-500' onClick={() => onDelete(product)}>
          <BsTrash />
          Delete
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
