import { CartProductType } from '~types'

import { CartProduct } from './CartProduct'

type CartSummaryProps = {
  products: CartProductType[]
  total: number
}

export const CartSummary = ({ products, total }: CartSummaryProps) => {
  return (
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
  )
}
