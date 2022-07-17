import { BsFillTriangleFill } from 'react-icons/bs'

import { useAppDispatch, useAppSelector } from '@hooks'
import { closeFiltersModal } from '@redux/actions'
import { setFilters } from '@redux/actions/filters'

import Modal from '@shared/Modal'
import FilterPill from './FilterPill'
import Button from './Button'

const labels = ['Keto', 'Vegano', 'Proteico', 'Gluten Free', 'Sin Azucar']

const FiltersModal = () => {
  const isOpen: boolean = useAppSelector((state) => state.modal.filters)
  
  const filters = useAppSelector((state) => state.filters.filters)

  const dispatch = useAppDispatch()

  const closeModal = () => dispatch(closeFiltersModal())

  const handleSelection = (selectedFilter: string) => dispatch(setFilters(selectedFilter))

  return (
    <Modal isOpen={isOpen} closeOnOverlayClick>
      <div className="items-left relative flex flex-col flex-wrap justify-start px-2">
        <div className="absolute -top-4 left-1">
          <BsFillTriangleFill color="white" size={20} />
        </div>
        <div className="px-2">
          {labels.map((label, index) => (
            <FilterPill
              key={index}
              label={label}
              selected={filters.includes(label)}
              onClick={handleSelection}
            />
          ))}
        </div>
        <div className="my-1">
          <Button title="Cerrar" type="outlined" onClick={closeModal} />
        </div>
      </div>
    </Modal>
  )
}

export default FiltersModal
