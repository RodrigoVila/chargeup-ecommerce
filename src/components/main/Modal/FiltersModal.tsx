import { FunnelIcon } from '@heroicons/react/24/outline';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import FilterPill from '@main/FilterPill';
import Button from '@shared/Buttons/CustomButton';

const labels = ['Keto', 'Vegano', 'Proteico', 'Gluten Free', 'Sin Azucar'];

const FiltersModal = () => {
  const { isFilterModalOpen, filters } = useAppSelector();
  const { closeFiltersModal, setProductFilters } = useAppActions();

  return (
    <Modal isOpen={isFilterModalOpen} closeOnOverlayClick onClose={()=>{}}>
      <div className="relative flex flex-col flex-wrap justify-start gap-2 px-2 items-left">
        <div className="absolute -top-4 left-1">
          <FunnelIcon color="white" />
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
        <Button type="outlined" onClick={() => closeFiltersModal()}>
          Cerrar
        </Button>
      </div>
    </Modal>
  );
};

export default FiltersModal;
