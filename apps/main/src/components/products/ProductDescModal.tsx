import { useIntl } from 'react-intl'

import { Modal, ModalClose, ModalContent, ModalTrigger } from '@packages/modal'
import { ProductType } from '@packages/types'
import { Button } from '@packages/button'

type ProductDescModal = {
  product: ProductType
}

export const ProductDescModal = ({ product }: ProductDescModal) => {
  const { formatMessage } = useIntl()
  return (
    <Modal>
      <ModalTrigger asChild>
        <div className='cursor-pointer text-base md:text-lg'>
          <p>{product.description?.short}</p>
          <p className='text-orange-400'>{formatMessage({ id: 'SEE_MORE' })}</p>
        </div>
      </ModalTrigger>
      {/* TODO We should remove ModalContent styles and create a default style at the package */}
      <ModalContent>
        <div className='flex w-full flex-col gap-3'>
          {/*header*/}
          <h3 className='text-center text-2xl font-semibold text-black'>{product?.title}</h3>
          {/*body*/}
          <div className='text-center'>
            <div className='px-1 text-sm leading-relaxed text-slate-500'>
              {product?.description.long?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <ModalClose>
            <Button className='bg-purple-600'>Cerrar</Button>
          </ModalClose>
        </div>
      </ModalContent>
    </Modal>
  )
}
