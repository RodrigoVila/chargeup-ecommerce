import { FormEvent, ReactNode } from 'react';
import { colors } from '@constants/colors';
import Spinner from '@shared/Spinner';

interface Props {
  title: string;
  leftIconComponent?: ReactNode;
  rightIconComponent?: ReactNode;
  isSubmit?: boolean;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
  type?: 'filled' | 'outlined';
  className?: string;
  loading?: boolean;
}

const Button = ({
  title,
  leftIconComponent,
  rightIconComponent,
  isSubmit,
  onClick,
  type = 'filled',
  className = '',
  loading = false,
}: Props) => {
  const baseStyles =
    'z-20 flex w-full cursor-pointer items-center justify-center rounded-md py-2 text-white py-2 px-4 text-sm';

  const typeStyles = type === 'outlined' ? 'border border-black text-black hover:text-white hover:bg-black' : 'bg-mainPurple hover:bg-fuchsia-600';

  const textStyles = type === 'outlined' ? 'text-black' : 'text-white';

  const iconStyle = 'h-full mx-1';

  return loading ? (
    <button className={`${baseStyles} bg-gray-400 text-gray-200`} onClick={onClick} disabled>
      <Spinner />
    </button>
  ) : (
    <button
      className={`${baseStyles} ${typeStyles} ${className}`}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
    >
      <>
        {leftIconComponent && <div className={iconStyle}>{leftIconComponent}</div>}
        <p className={`${textStyles} h-full w-full py-1 px-4`}>{title}</p>
        {rightIconComponent && <div className={iconStyle}>{rightIconComponent}</div>}
      </>
    </button>
  );
};

export default Button;
