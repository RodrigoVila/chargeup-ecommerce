import { ButtonHTMLAttributes, FormEvent, ReactNode } from 'react';
import Spinner from '@shared/Spinner';
import { twMerge } from 'tailwind-merge';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className'> & {
  leftIconComponent?: ReactNode;
  rightIconComponent?: ReactNode;
  isSubmit?: boolean;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
  type?: 'filled' | 'outlined';
  loading?: boolean;
  className?: string;
  labelClassName?: string;
};

const CustomButton = ({
  leftIconComponent,
  rightIconComponent,
  isSubmit,
  onClick,
  type = 'filled',
  loading = false,
  className= "",
  labelClassName = '',
  ...rest
}: ButtonProps) => {
  const baseStyles =
    'group z-20 flex w-full cursor-pointer items-center justify-center rounded-md py-2 py-2 px-4';

  const typeStyles =
    type === 'outlined'
      ? 'border border-black hover:bg-black'
      : 'bg-mainPurple hover:bg-fuchsia-600';

  const textStyles =
    type === 'outlined' ? 'text-black group-hover:text-white text-sm' : 'text-white text-sm';

  const iconStyle = 'h-full mx-1';

  return loading ? (
    <button className={twMerge('bg-gray-400 text-gray-200', baseStyles)} onClick={onClick} disabled>
      <Spinner />
    </button>
  ) : (
    <button
      className={twMerge(baseStyles, typeStyles, className)}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      {...rest}
    >
      {leftIconComponent && <div className={iconStyle}>{leftIconComponent}</div>}
      <p className={twMerge('h-full w-full py-1 px-4', textStyles, labelClassName)}>{rest.children}</p>
      {rightIconComponent && <div className={iconStyle}>{rightIconComponent}</div>}
    </button>
  );
};

export default CustomButton;
