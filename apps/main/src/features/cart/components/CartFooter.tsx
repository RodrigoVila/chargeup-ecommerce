import { Button } from '@packages/button'

type CartFooterProps = {
  onSubmit: () => void
}

export const CartFooter = ({ onSubmit }: CartFooterProps) => {
  return (
    <div className='bg-tranlucentBlack2 w-full px-2 pb-3 pt-1 text-white'>
      <div className=' lg:text-2xl'>Resumen del pedido</div>
      <div className='mx-auto flex w-1/4 flex-col lg:text-lg'>
        <div className='flex justify-between'>
          <div className='mx-1'>1 Producto</div>
          <div className='mx-1'>e100</div>
        </div>
        <div className='flex justify-between'>
          <div className='mx-1'>Entrega</div>
          <div className='mx-1'>Gratis</div>
        </div>
        <div className='flex justify-between'>
          <div className='mx-1'>Total</div>
          <div className='mx-1'>e100</div>
        </div>
      </div>
      <div className='ml-auto w-1/3'>
        <Button type='outlined' onClick={onSubmit}>
          Ir a pagar
        </Button>
      </div>
    </div>
  )
}
