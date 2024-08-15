import { CartProductType } from '~types'

import { CartProduct } from './CartProduct'
import { Button } from '@packages/button'

type CartSummaryProps = {
  products: CartProductType[]
  total: number
  next: () => void
}

export const CartSummary = ({ products, total, next }: CartSummaryProps) => {
  return (
    <>
      <div className='flex w-full flex-col gap-3'>
        <h3 className='text-center text-3xl text-black'>{`${products.length} ${
          products.length > 1 ? 'articulos' : 'articulo'
        } en la cesta`}</h3>
        {products.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}
        <div className='flex w-full items-center justify-between py-2 pb-0 text-3xl text-black'>
          <div>Total</div>
          <div>{`€${total.toFixed(2)}`}</div>
        </div>
      </div>
      <Button className='mt-4 w-full text-base' onClick={next}>
        Siguiente
      </Button>
    </>
  )
}
