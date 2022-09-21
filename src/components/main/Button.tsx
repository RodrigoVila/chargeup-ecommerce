import { FormEvent } from 'react';

interface Props {
  title: string;
  color?: string;
  type?: 'filled' | 'outlined';
  isSubmit?: boolean;
  disabled?: boolean;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

const Button = ({ title, color, type, isSubmit, disabled = false, onClick }: Props) => {
  return type === 'outlined' ? (
    <button
      className="my-2 w-full cursor-pointer rounded-md  border-2 p-2 text-center text-xl text-black shadow-sm"
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      style={{ color, borderColor: color }}
      disabled={disabled}
    >
      {title}
    </button>
  ) : (
    <button
      className={`${
        disabled ? 'bg-gray-300' : 'bg-purple-500'
      } flex w-full cursor-pointer items-center justify-center rounded-md p-1 py-2 text-white md:text-xl`}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      // style={{ backgroundColor: color, color: '#fff' }}
    >
      {title}
    </button>
  );
};

export default Button;
