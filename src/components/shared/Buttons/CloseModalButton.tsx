import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
  color: string;
  className?: string;
  position?: string;
  isAbsolute?: boolean;
  onClose: () => void;
}

const CloseModalButton = ({
  color: propColor,
  className = '',
  position = 'right',
  isAbsolute = false,
  onClose,
}: Props) => {
  const color =
    propColor === 'white' || propColor === 'black' ? `text-${propColor}` : `text-${propColor}-500`;

  return (
    <div
      className={`${className} ${
        isAbsolute && `absolute ${position}-0`
      } top-0 h-9 w-9 cursor-pointer text-white`}
    >
      <button onClick={onClose}>
        <XMarkIcon className={`${color} h-full w-full`} />
      </button>
    </div>
  );
};

export default CloseModalButton;
