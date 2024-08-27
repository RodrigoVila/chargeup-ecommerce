import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { Button } from '@packages/button'
import { Checkbox } from '@packages/checkbox'
import { Modal, ModalContent, ModalTrigger } from '@packages/modal'
import { CartProductType, LabelAndPriceType } from '@packages/types'

import { useAppActions } from '~hooks'
import { Counter } from '~components/Counter'
import { Dropdown } from '~components/Dropdown'
import { getProductSubtotal } from '~utils/products'

import { type ProductProps } from './Product'

export const ProductExtrasModal = ({ product }: ProductProps) => {
  const [isOpen, setOpen] = useState(false)
  const [itemCount, setItemCount] = useState(1)
  const [selectedSize, setSelectedSize] = useState<LabelAndPriceType | null>(null)
  const [selectedExtras, setSelectedExtras] = useState<LabelAndPriceType[]>([])

  const { formatMessage } = useIntl()

  const { displayInfoMessage, displaySuccessMessage, addToCart } = useAppActions()

  const onItemCountChange = (type: string) => {
    if (type === 'add') {
      setItemCount((prevCount) => prevCount + 1)
    } else {
      if (itemCount < 2) return
      setItemCount((prevCount) => prevCount - 1)
    }
  }

  const onSizeChange = (size: LabelAndPriceType) => setSelectedSize(size)

  const onExtrasChange = (extra: LabelAndPriceType) => {
    const index = selectedExtras.findIndex((el) => el.label === extra.label)
    index === -1
      ? setSelectedExtras((prevExtras) => [...prevExtras, extra])
      : setSelectedExtras((prevExtras) => prevExtras.filter((ex) => ex.label !== extra.label))
  }

  const subTotal = getProductSubtotal(selectedSize, selectedExtras)
  const total = subTotal * itemCount

  const addItemToCart = () => {
    if (itemCount === 0) {
      displayInfoMessage('La cantidad tiene que ser mayor a 0')
      return
    }

    if (!selectedSize) {
      displayInfoMessage('Error al seleccionar producto')
      return
    }

    // It's just an ID that will be used to update/remove cart items. If it's exactly the same item, it updates it. If not, it add a new variant.
    const getUniqueID = () => {
      let extrasString: string[] = []
      selectedExtras.map((extra) => extrasString.push(extra.label))
      const sorted = extrasString.sort()
      return btoa(`${product?.title},${selectedSize?.label},${sorted}`)
    }
    const cartProduct: CartProductType = {
      id: getUniqueID(),
      title: product?.title,
      selectedSize,
      selectedExtras,
      quantity: itemCount,
      subTotal,
      total,
    }

    addToCart(cartProduct)
    displaySuccessMessage('Producto agregado!')
  }

  useEffect(() => {
    product?.sizes && setSelectedSize(product.sizes[0])
  }, [product])

  useEffect(() => {
    if (!isOpen) {
      setSelectedExtras([])
      setItemCount(1)
    }
  }, [isOpen])

  const labelStyle = 'text-md font-bold'

  return (
    <Modal open={isOpen} onOpenChange={setOpen}>
      <ModalTrigger>
        <Button className='bg-purple-800 uppercase hover:bg-purple-700'>
          {formatMessage({ id: 'PRODUCTS_SELECT_PRODUCT' })}
        </Button>
      </ModalTrigger>
      <ModalContent className='flex w-full flex-col gap-2'>
        <h3 className='text-center text-xl font-semibold'>{product?.title}</h3>
        <div className='flex flex-col flex-wrap items-start'>
          {/* sizes dropdown */}
          {product?.sizes ? (
            <div className='flex flex-col justify-center'>
              <h6 className={labelStyle}>Presentacion</h6>
              <Dropdown
                name='sizes'
                // label={selectedSize?.label}
                options={product?.sizes}
                onChange={onSizeChange}
              />
            </div>
          ) : null}
          {/* extras dropdown */}
          {product?.extras && product.extras.length > 0 ? (
            <div className='flex w-full flex-col justify-center'>
              <h6 className={labelStyle}>Extras</h6>
              {product?.extras?.map((extra, index) => (
                <Checkbox
                  key={`${index}${extra}`}
                  label={`${extra.label} (+ € ${extra.price.toFixed(2)})`}
                  onChange={() => onExtrasChange(extra)}
                />
              ))}
            </div>
          ) : null}

          <div className='flex w-full items-center justify-between'>
            <Counter
              count={itemCount}
              addOne={() => onItemCountChange('add')}
              subtractOne={() => onItemCountChange('sub')}
            />
            {/* Price */}
            <div className='flex flex-col items-end justify-center'>
              <h6 className='text-xl'>Total</h6>
              <h3 className='text-3xl'>{`€${total.toFixed(2)}`}</h3>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <Button onClick={addItemToCart}>Agregar</Button>
        </div>
      </ModalContent>
    </Modal>
  )
}
