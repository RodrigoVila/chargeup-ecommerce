import { useAppActions, useAppSelector } from '~hooks'

import { Button } from '@packages/button'

import { Modal } from '~features/modal'

export const ProductDescModal = () => {
  const { isProductModalOpen, selectedModalProduct } = useAppSelector()

  const { closeProductModal } = useAppActions()

  return (
    <Modal isOpen={isProductModalOpen} onClose={closeProductModal}>
      <div className='flex w-full flex-col gap-3'>
        {/*header*/}
        <h3 className='text-center text-2xl font-semibold'>{selectedModalProduct?.title}</h3>
        {/*body*/}
        <div className='text-center'>
          <div className='px-1 text-sm leading-relaxed text-slate-500'>
            {selectedModalProduct?.description.long?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <Button onClick={() => closeProductModal()}>Cerrar</Button>
      </div>
    </Modal>
  )
}
