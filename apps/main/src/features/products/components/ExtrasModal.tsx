import { useEffect, useState } from 'react'

import { Dropdown } from '@packages/dropdown'
import { Button } from '@packages/button'
import { Checkbox } from '@packages/checkbox'

import { useAppActions, useAppSelector } from '~hooks'
import { Modal } from '~features/modal'
import { Counter } from '~components/Counter'
import { getProductSubtotal } from '~utils'
import { CartProductType, LabelAndPriceType } from '~types'

export const ProductExtrasModal = () => {
  // Product specification before adding it to cart
  const [itemCount, setItemCount] = useState(1)
  const [selectedSize, setSelectedSize] = useState<LabelAndPriceType | null>(null)
  const [selectedExtras, setSelectedExtras] = useState<LabelAndPriceType[]>([])

  const { isExtrasModalOpen, selectedModalProduct } = useAppSelector()
  const { displayInfoMessage, displaySuccessMessage, addToCart, closeExtrasModal } = useAppActions()

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
    const { title } = selectedModalProduct

    if (itemCount === 0) {
      displayInfoMessage('La cantidad tiene que ser mayor a 0')
      return
    }

    // It's just an ID that will be used to update/remove cart items. If it's exactly the same item, it updates it. If not, it add a new variant.
    const getUniqueID = () => {
      let extrasString = []
      selectedExtras.map((extra) => extrasString.push(extra.label))
      const sorted = extrasString.sort()
      return btoa(`${title},${selectedSize.label},${sorted}`)
    }
    const cartProduct: CartProductType = {
      id: getUniqueID(),
      title,
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
    selectedModalProduct && setSelectedSize(selectedModalProduct.sizes[0])
  }, [selectedModalProduct])

  useEffect(() => {
    if (!isExtrasModalOpen) {
      setSelectedExtras([])
      setItemCount(1)
    }
  }, [isExtrasModalOpen])

  const labelStyle = 'text-md font-bold'

  return (
    <Modal isOpen={isExtrasModalOpen} onClose={closeExtrasModal}>
      <div className="flex flex-col w-full gap-2">
        <h3 className="text-xl font-semibold text-center">{selectedModalProduct?.title}</h3>
        <div className="flex flex-col flex-wrap items-start">
          {/* sizes dropdown */}
          {selectedModalProduct?.sizes ? (
            <div className="flex flex-col justify-center">
              <h6 className={labelStyle}>Presentacion</h6>
              <Dropdown
                name="sizes"
                // label={selectedSize?.label}
                options={selectedModalProduct?.sizes}
                onChange={onSizeChange}
              />
            </div>
          ) : null}
          {/* extras dropdown */}
          {selectedModalProduct?.extras.length > 0 ? (
            <div className="flex flex-col justify-center w-full">
              <h6 className={labelStyle}>Extras</h6>
              {selectedModalProduct?.extras?.map((extra, index) => (
                <Checkbox
                  key={`${index}${extra}`}
                  label={`${extra.label} (+ € ${extra.price.toFixed(2)})`}
                  onChange={() => onExtrasChange(extra)}
                />
              ))}
            </div>
          ) : null}

          <div className="flex items-center justify-between w-full">
            <Counter
              count={itemCount}
              addOne={() => onItemCountChange('add')}
              subtractOne={() => onItemCountChange('sub')}
            />
            {/* Price */}
            <div className="flex flex-col items-end justify-center">
              <h6 className="text-xl">Total</h6>
              <h3 className="text-3xl">{`€${total.toFixed(2)}`}</h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button onClick={addItemToCart}>Agregar</Button>
        </div>
      </div>
    </Modal>
  )
}
