import { shallowEqual } from 'react-redux'

import { useAppDispatch, useAppSelector } from '@hooks'
import { closeCartModal, openCheckoutModal } from '@redux/actionCreators'
import CartProduct from '@main/Cart/CartProduct'
import CloseModalButton from '@main/Buttons/CloseModalButton'
import Button from '@main/Button'
import { colors } from '@utils/constants'
import { useEffect, useMemo } from 'react'
import ReactTooltip from 'react-tooltip'

const CartModal = () => {
  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.cart, shallowEqual)

  const items: ProductType[] = useAppSelector((state: StateType) => state.cart.items, shallowEqual)

  const dispatch = useAppDispatch()
  const onClose = () => dispatch(closeCartModal())

  const onSubmit = () => {
    onClose()
    dispatch(openCheckoutModal())
  }

  const totalSum = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  )

  useEffect(() => {
    items.length === 0 && onClose()
  }, [items])

  // useEffect(() => {
  //   isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  // }, [isOpen])

  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } absolute top-0 right-0 z-30 flex flex-col items-center justify-center`}
    >
      <ReactTooltip />
      <div className="2 relative m-2 flex min-w-[500px] flex-col items-center rounded-lg bg-white md:w-2/3">
        <div className="absolute right-2 top-2">
          <CloseModalButton color="black" position="right" onClose={onClose} />
        </div>
        <div className="my-6 px-2 text-center text-4xl text-black">{`${items.length} ${
          items.length > 1 ? 'articulos' : 'articulo'
        } en la cesta`}</div>
        {items.map((item) => (
          <CartProduct
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            nutritionalInfo={item.nutritionalInfo}
            suitableForInfo={item.suitableForInfo}
            price={item.price}
            quantity={item.quantity}
            imgUri={item.imgUri}
          />
        ))}

        <div className="flex w-full items-center justify-between p-4 pb-0 text-3xl text-black">
          <div>Total</div>
          <div>{`€${totalSum}`}</div>
        </div>
        <div className="flex w-full items-center justify-between px-4 pt-2">
          <div className="h-full text-xl text-gray-700">Envio</div>
          <div className="h-full text-xl text-gray-700">€0</div>
        </div>
        <div className="flex w-full items-center justify-between px-4 pt-2">
          <div className="h-full text-xl text-gray-700">Entrega</div>
          <div className="h-full text-xl text-gray-700">48hs</div>
        </div>
        <div className="flex w-full flex-col items-center justify-between p-4 text-xl text-white md:text-3xl">
          <Button title="Ir a pagar" color={colors.purple} onClick={onSubmit} />
          <div
            className="my-2 w-full cursor-pointer rounded-md  border-2 p-2 text-center text-xl text-black shadow-sm"
            onClick={onClose}
          >
            Cerrar
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal
