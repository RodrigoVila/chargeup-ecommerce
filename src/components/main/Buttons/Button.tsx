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
  withGradient?: boolean;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

const Button = ({ title, color, hoverColor, type, isSubmit, disabled = false, withGradient, onClick }: Props) => {
  return type === 'outlined' ? (
    <button
      className={` ${hoverColor && `hover:bg-[${hoverColor}]`} ${disabled && 'cursor-none bg-gray-300 hover:bg-none'
        } transit m-1 w-full z-20 cursor-pointer rounded-md border-2 py-1 px-4 text-center lg:text-xl text-black shadow-sm`}
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
      className={`${disabled && 'hover:bg-none'} ${hoverColor && !disabled && `hover:bg-[${hoverColor}]`
        } ${withGradient && "bg-gradient-to-br"} bg-[${withGradient? "transparent" : color }] from-purple-600 via-[${color}] to-purple-700 m-1 flex w-full cursor-pointer items-center justify-center rounded-md py-2 px-4 text-white lg:text-lg z-20`}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      disabled={disabled}
      style={{
        color: '#fff',
        cursor: disabled ? 'default' : 'pointer',
      }}
    >
      {disabled ? <Spinner color={colors.disabled} backgroundColor={colors.purple} /> : title}
    </button>
  );
};

export default Button;
