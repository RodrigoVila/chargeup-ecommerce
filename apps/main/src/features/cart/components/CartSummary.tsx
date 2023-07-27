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
      <div className='flex flex-col w-full gap-3'>
        <h3 className='text-3xl text-center text-black'>{`${products.length} ${
          products.length > 1 ? 'articulos' : 'articulo'
        } en la cesta`}</h3>
        {products.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}
        <div className='flex items-center justify-between w-full py-2 pb-0 text-3xl text-black'>
          <div>Total</div>
          <div>{`€${total.toFixed(2)}`}</div>
        </div>
      </div>
      <Button className='w-full mt-4 text-base' onClick={next}>
        Siguiente
      </Button>
    </>
  )
}
