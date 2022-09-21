import { BsFillTriangleFill } from 'react-icons/bs';

import useActions from '@hooks/useActions';
import useSelector from '@hooks/useSelector';

import Modal from '@shared/Modal';
import FilterPill from './FilterPill';
import Button from './Button';

const labels = ['Keto', 'Vegano', 'Proteico', 'Gluten Free', 'Sin Azucar'];

const FiltersModal = () => {
  const { isFilterModalOpen, filters } = useSelector();
  const { closeFiltersModal, setProductFilters } = useActions();

  return (
    <Modal isOpen={isFilterModalOpen} closeOnOverlayClick>
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
              onClick={() => setProductFilters(label)}
            />
          ))}
        </div>
        <div className="my-1">
          <Button
            title="Cerrar"
            type="outlined"
            onClick={() => {
              closeFiltersModal();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default FiltersModal;
