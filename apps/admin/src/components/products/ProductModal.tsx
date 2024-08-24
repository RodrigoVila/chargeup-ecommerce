import { useState, ChangeEvent } from 'react'
import { Modal, ModalContent } from '@packages/modal'
import { Button } from '@packages/button'
import { Input } from '@packages/input'

import { ProductType, LabelAndPriceType } from '@packages/types'

type ProductModalProps = {
  isOpen: boolean
  product: ProductType
}

export const ProductModal = ({ isOpen, product }: ProductModalProps) => {
  const [productData, setProductData] = useState<ProductType>(product)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProductData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSizeChange = (index: number, value: string, type: keyof LabelAndPriceType) => {
    const updatedSizes = productData.sizes?.map((size, i) =>
      i === index ? { ...size, [type]: type === 'price' ? parseFloat(value) : value } : size,
    )
    setProductData((prevData) => ({ ...prevData, sizes: updatedSizes || null }))
  }

  const handleExtrasChange = (index: number, value: string, type: keyof LabelAndPriceType) => {
    const updatedExtras = productData.extras?.map((extra, i) =>
      i === index ? { ...extra, [type]: type === 'price' ? parseFloat(value) : value } : extra,
    )
    setProductData((prevData) => ({ ...prevData, extras: updatedExtras }))
  }

  // Function to handle product save/update (submit to backend)
  const handleSave = () => {
    // Call your API or action to save the product data
    // Example: saveProduct(productData);
  }

  return (
    <Modal open={isOpen} className='bg-black'>
      <ModalContent className='m-4 mx-auto max-w-lg rounded-xl bg-slate-800 p-8'>
        {/* Title */}
        <Input
          labelClassName='text-gray-300 font-semibold'
          label='Title'
          name='title'
          value={productData.title}
        />
        {/* Description */}
        <Input
          labelClassName='text-gray-300 font-semibold'
          label='Short Description'
          type='text'
          name='description.short'
          value={productData.description.short}
          onChange={handleChange}
        />
        {/* Long Description */}
        {productData.description.long.map((desc, index) => (
          <Input
            key={index}
            labelClassName='text-gray-300 font-semibold'
            label={`Long Description ${index + 1}`}
            type='text'
            value={desc}
            onChange={(e) => {
              const updatedDescriptions = [...productData.description.long]
              updatedDescriptions[index] = e.target.value
              setProductData((prevData) => ({
                ...prevData,
                description: { ...prevData.description, long: updatedDescriptions },
              }))
            }}
          />
        ))}
        {/* Image URI */}
        <Input
          labelClassName='text-gray-300 font-semibold'
          label='Image URI'
          type='text'
          name='imgUri'
          value={productData.imgUri}
          onChange={handleChange}
        />
        {/* Sizes */}
        {productData.sizes?.map((size, index) => (
          <div key={index}>
            <Input
              labelClassName='text-gray-300 font-semibold'
              label={`Size Label ${index + 1}`}
              type='text'
              value={size.label}
              onChange={(e) => handleSizeChange(index, e.target.value, 'label')}
            />
            <Input
              labelClassName='text-gray-300 font-semibold'
              label={`Size Price ${index + 1}`}
              type='number'
              value={size.price}
              onChange={(e) => handleSizeChange(index, e.target.value, 'price')}
            />
          </div>
        ))}
        {/* Extras */}
        {productData.extras?.map((extra, index) => (
          <div key={index}>
            <Input
              labelClassName='text-gray-300 font-semibold'
              label={`Extra Label ${index + 1}`}
              type='text'
              value={extra.label}
              onChange={(e) => handleExtrasChange(index, e.target.value, 'label')}
            />
            <Input
              labelClassName='text-gray-300 font-semibold'
              label={`Extra Price ${index + 1}`}
              type='number'
              value={extra.price}
              onChange={(e) => handleExtrasChange(index, e.target.value, 'price')}
            />
          </div>
        ))}
        {/* Nutritional Info */}
        <Input
          labelClassName='text-gray-300 font-semibold'
          label='Weight (g)'
          type='number'
          name='nutritionalInfo.weight'
          value={productData.nutritionalInfo.weight}
          onChange={handleChange}
        />
        <Input
          labelClassName='text-gray-300 font-semibold'
          label='Calories'
          type='number'
          name='nutritionalInfo.calories'
          value={productData.nutritionalInfo.calories}
          onChange={handleChange}
        />
        <Input
          labelClassName='text-gray-300 font-semibold'
          label='Protein (g)'
          type='number'
          name='nutritionalInfo.protein'
          value={productData.nutritionalInfo.protein}
          onChange={handleChange}
        />
        <Input
          labelClassName='text-gray-300 font-semibold'
          label='Carbs (g)'
          type='number'
          name='nutritionalInfo.carbs'
          value={productData.nutritionalInfo.carbs}
          onChange={handleChange}
        />
        <Input
          labelClassName='text-gray-300 font-semibold'
          label='Fat (g)'
          type='number'
          name='nutritionalInfo.fat'
          value={productData.nutritionalInfo.fat}
          onChange={handleChange}
        />
        {/* Add a Save Button */}
        <Button onClick={handleSave}>Save Product</Button>
      </ModalContent>
    </Modal>
  )
}
