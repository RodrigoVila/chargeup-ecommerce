import { FormEvent } from 'react';
import { colors } from '@constants';
import Spinner from '@shared/Spinner';

interface Props {
  title: string;
  color?: string;
  hoverColor?: string;
  type?: 'filled' | 'outlined';
  isSubmit?: boolean;
  disabled?: boolean;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

const Button = ({ title, color, hoverColor, type, isSubmit, disabled = false, onClick }: Props) => {
  return type === 'outlined' ? (
    <button
      className={` ${hoverColor && `hover:bg-[${hoverColor}]`} ${
        disabled && 'cursor-none bg-gray-300 hover:bg-none'
      } my-2 my-2 w-full cursor-pointer  rounded-md border-2 py-2 px-4 text-center text-xl text-black shadow-sm`}
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
      className={`${disabled && 'hover:bg-none'} ${
        hoverColor && !disabled && `hover:bg-[${hoverColor}]`
      } my-2 flex w-full cursor-pointer items-center justify-center rounded-md py-2 px-4 text-white`}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? colors.disabled : color,
        color: '#fff',
        cursor: disabled ? 'default' : 'pointer',
      }}
    >
      {disabled ? <Spinner color={colors.disabled} backgroundColor={colors.purple} /> : title}
    </button>
  );
};

export default Button;
