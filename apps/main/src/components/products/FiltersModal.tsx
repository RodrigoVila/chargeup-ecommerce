import { IoFilter } from 'react-icons/io5'

import { Button } from '@packages/button'
import { Modal, ModalContent, ModalTrigger } from '@packages/modal'

import { FilterPill } from './FilterPill'

const labels = ['Keto', 'Vegano', 'Proteico', 'Gluten Free', 'Sin Azucar']

export const FiltersModal = () => {
  return (
    <Modal>
      <ModalTrigger>
        <IoFilter color='white' />
      </ModalTrigger>
      <ModalContent>
        <div className='px-2'>
          {labels.map((label, index) => (
            <FilterPill key={index} label={label} selected={false} onClick={() => {}} />
          ))}
        </div>
        <Button variant='outlined'>Cerrar</Button>
      </ModalContent>
    </Modal>
  )
}
