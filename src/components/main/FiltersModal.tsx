import { useAppDispatch, useAppSelector } from '@hooks'
import { closeFiltersModal } from '@redux/actions'
import Modal from 'components/shared/Modal'
import { shallowEqual } from 'react-redux'
import CloseModalButton from './Buttons/CloseModalButton'
import FilterPill from './FilterPill'

const labels = ['Keto', 'Vegano', 'Alto en proteina', 'Gluten Free', 'Sin Azucar']

const FiltersModal = () => {
  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.filters, shallowEqual)

  const dispatch = useAppDispatch()
  const closeModal = () => dispatch(closeFiltersModal())

  return (
    <Modal isOpen={isOpen} transparent closeOnOverlayClick>
      {labels.map((label, index) => (
        <FilterPill key={index} label={label} setSelected={() => {}} />
      ))}
    </Modal>
  )
}

export default FiltersModal
