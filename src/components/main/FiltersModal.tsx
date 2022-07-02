import { useAppDispatch, useAppSelector } from '@hooks'
import { closeFiltersModal } from '@redux/actions'
import Modal from 'components/shared/Modal'
import CloseModalButton from './Buttons/CloseModalButton'
import FilterPill from './FilterPill'

import { BsFillTriangleFill } from 'react-icons/bs'

const labels = ['Keto', 'Vegano', 'Proteico', 'Gluten Free', 'Sin Azucar']

const FiltersModal = () => {
  const isOpen: boolean = useAppSelector((state: StateType) => state.modal.filters)

  const dispatch = useAppDispatch()
  const closeModal = () => dispatch(closeFiltersModal())

  return (
    <Modal isOpen={isOpen} closeOnOverlayClick>
      <div className="items-left relative flex flex-wrap justify-start">
        <div className="absolute -top-3 left-1">
          <BsFillTriangleFill color="white" size={20} />
        </div>
        {labels.map((label, index) => (
          <FilterPill key={index} label={label} setSelected={() => {}} />
        ))}
      </div>
    </Modal>
  )
}

export default FiltersModal
