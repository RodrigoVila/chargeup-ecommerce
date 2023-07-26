import { FunnelIcon } from '@heroicons/react/24/outline'

import { Button } from '@packages/button'

import { useAppActions, useAppSelector } from '~hooks'
import { Modal } from '~features/modal'

import { FilterPill } from './FilterPill'

const labels = ['Keto', 'Vegano', 'Proteico', 'Gluten Free', 'Sin Azucar']

export const FiltersModal = () => {
  const { isFilterModalOpen, filters } = useAppSelector()
  const { closeFiltersModal, setProductFilters } = useAppActions()

  return (
    <Modal isOpen={isFilterModalOpen} closeOnOverlayClick onClose={() => {}}>
      <div className='items-left relative flex flex-col flex-wrap justify-start gap-2 px-2'>
        <div className='absolute -top-4 left-1'>
          <FunnelIcon color='white' />
        </div>
        <div className='px-2'>
          {labels.map((label, index) => (
            <FilterPill
              key={index}
              label={label}
              selected={filters.includes(label)}
              onClick={() => setProductFilters(label)}
            />
          ))}
        </div>
        <Button type='outlined' onClick={() => closeFiltersModal()}>
          Cerrar
        </Button>
      </div>
    </Modal>
  )
}
