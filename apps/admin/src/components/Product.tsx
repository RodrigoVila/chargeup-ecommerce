// import useAppActions from '~hooks'
import Image from 'next/image'
import { ProductType } from '@packages/types'

type ProductProps = {
  product: ProductType
}
const Product = ({ product }: ProductProps) => {
  const { title, nutritionalInfo, suitableForInfo, imgUri } = product

  // const { openProductModal } = useAppActions()

  // const handleEditing = () => openProductModal(product)

  return (
    <tr>
      <td className='whitespace-nowrap px-6 py-4'>
        <div className='flex items-center'>
          {/* Imagen */}
          <div className='relative h-10 w-10 flex-shrink-0'>
            <Image objectFit='cover' layout='fill' src={`/images/${imgUri}.jpg`} alt='' />
          </div>
          {/* Titulo */}
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>{title}</div>
          </div>
        </div>
      </td>
      {/* Precio */}
      <td className='whitespace-nowrap px-6 py-4'>
        <div className='text-sm text-gray-900'>€0</div>
      </td>
      <td className='whitespace-nowrap px-6 py-4'>
        {nutritionalInfo.calories && (
          <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            {`Cal: ${nutritionalInfo.calories}`}
          </span>
        )}
        {nutritionalInfo.carbs && (
          <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            {`Carbs: ${nutritionalInfo.carbs}`}
          </span>
        )}
        {nutritionalInfo.fat && (
          <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            {`Fat: ${nutritionalInfo.fat}`}
          </span>
        )}
        {nutritionalInfo.protein && (
          <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            {`Prot: ${nutritionalInfo.protein}`}
          </span>
        )}
        {nutritionalInfo.weight && (
          <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            {`Weight: ${nutritionalInfo.weight}`}
          </span>
        )}
      </td>
      <td className='whitespace-nowrap px-6 py-4'>
        {suitableForInfo.glutenFree && (
          <span className='inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            GF
          </span>
        )}
        {suitableForInfo.keto && (
          <span className='inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            Keto
          </span>
        )}
        {suitableForInfo.protein && (
          <span className='inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            HP
          </span>
        )}
        {suitableForInfo.vegan && (
          <span className='inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-green-800'>
            V
          </span>
        )}
      </td>
      <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
        <button
          // onClick={handleEditing}
          type='button'
          className='m-1 rounded-full bg-zinc-800 px-3 py-2 text-xs text-zinc-300 shadow-xl shadow-zinc-400/50'
        >
          Modificar
        </button>
      </td>
    </tr>
  )
}

export default Product
