import { XMarkIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

interface Props {
  color: string;
  className?: string;
  onClose: () => void;
}

const CloseModalButton = ({ color: propColor, className = '', onClose }: Props) => {
  const color =
    propColor === 'white' || propColor === 'black' ? `text-${propColor}` : `text-${propColor}-500`;

  return (
    <div className={twMerge('top-0 h-9 w-9 cursor-pointer text-white', className)}>
      <button onClick={onClose}>
        <XMarkIcon className={twMerge('h-full w-full', color)} />
      </button>
    </div>
  );
};

export default CloseModalButton;
