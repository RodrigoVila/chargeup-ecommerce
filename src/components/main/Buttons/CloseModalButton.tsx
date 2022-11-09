import { XMarkIcon} from '@heroicons/react/24/outline';

interface Props {
  color: string;
  position?: string;
  isAbsolute?: boolean;
  onClose: () => void;
}

const CloseModalButton = ({
  color: propColor,
  position = 'right',
  isAbsolute = false,
  onClose,
}: Props) => {
  
  const color =
    propColor === 'white' || propColor === 'black' ? `text-${propColor}` : `text-${propColor}-500`;

  return (
    <div className={`${isAbsolute && `absolute ${position}-0`} top-0 w-9 h-9 mt-2 mr-2 text-white cursor-pointer`}>
      <button onClick={onClose}>
        <XMarkIcon className={`${color} h-full w-full`} />
      </button>
    </div>
  );
};

export default CloseModalButton;
