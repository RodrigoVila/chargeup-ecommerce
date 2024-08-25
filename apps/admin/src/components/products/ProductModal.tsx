import { useState, ChangeEvent, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import { Modal, ModalClose, ModalContent } from '@packages/modal'
import { Button } from '@packages/button'
import { Input } from '@packages/input'

import { ProductType, LabelAndPriceType } from '@packages/types'
import { Tooltip } from 'react-tooltip'

type ProductModalProps = {
  isOpen: boolean
  setOpen: (bool: boolean) => void
  product: ProductType
}

export const ProductModal = ({ isOpen, setOpen, product }: ProductModalProps) => {
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

  const handleAddParagraph = () => {
    setProductData((prevProductData) => ({
      ...prevProductData,
      description: {
        ...prevProductData.description,
        long: [...prevProductData.description.long, ''],
      },
    }))
  }

  const handleRemoveParagraph = (index: number) => {
    setProductData((prevProductData) => ({
      ...prevProductData,
      description: {
        ...prevProductData.description,
        long: prevProductData.description.long.filter((_, i) => i !== index),
      },
    }))
  }

  // Function to handle product save/update (submit to backend)
  const handleSave = () => {
    // Call your API or action to save the product data
    // Example: saveProduct(productData);
  }

  return (
    <Modal open={isOpen} onOpenChange={setOpen} className='bg-black'>
      <ModalContent className='relative m-4 mx-auto flex max-w-lg flex-col gap-2 rounded-xl bg-slate-800 p-8'>
        <ModalClose
          onClick={() => setOpen(false)}
          className='absolute top-3 right-3 w-max self-end text-white'
        >
          <IoClose size={36} />
        </ModalClose>
        <h1 className='text-center text-4xl text-white'>{productData.title}</h1>
        {/* Title */}
        <Input
          labelClassName='text-gray-300 font-semibold'
          label='Title'
          name='title'
          value={productData.title}
          onChange={handleChange}
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
        <div className='relative flex flex-col gap-3 rounded-md border-2 border-white p-4'>
          <div className='group'>
            <button
              className='absolute top-3 right-3 rounded-full border-4 p-2 text-white group-hover:border-green-500'
              data-tooltip-id='product-modal-tooltip'
              data-tooltip-content='Add new paragraph'
              onClick={handleAddParagraph}
            >
              <FaPlus size={16} className='group-hover:text-green-500' />
            </button>
          </div>
          <h3 className='text-center text-3xl text-gray-100'>Detailed description</h3>
          <p className='text-xl text-gray-100'>Each box serves as a different paragraph</p>
          {productData.description.long.map((desc, index) => (
            <div className='flex items-center justify-center gap-4'>
              <div className='flex w-full flex-col gap-2'>
                <label className='text-xl text-gray-100'>{`Paragraph ${index + 1}`}</label>
                <div className='flex items-center gap-2'>
                  <textarea
                    className='w-full'
                    key={index}
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
                  <div className='group'>
                    <button
                      className='rounded-full border-4 p-2 text-white group-hover:border-red-500'
                      data-tooltip-id='product-modal-tooltip'
                      data-tooltip-content='Remove this paragraph'
                      onClick={() => handleRemoveParagraph(index)}
                    >
                      <FaMinus size={12} className='group-hover:text-red-500' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
        <Button
          onClick={handleSave}
          variant='filled'
          className='bg-purple-800 hover:bg-purple-700'
          labelClassName='text-lg'
        >
          Save Product
        </Button>
        <Tooltip id='product-modal-tooltip' place='bottom' />
      </ModalContent>
    </Modal>
  )
}
