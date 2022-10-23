import { FormEvent } from 'react';
import { colors } from '@constants';
import Spinner from '@shared/Spinner';

interface Props {
  title: string;
  color?: string;
  hoverColor?: string;
  type?: 'filled' | 'outlined';
  size?: 'xs' | 'sm' | 'md'| 'lg'| 'xl'| '2xl'| '3xl' | '4xl'| '5xl'| '6xl'| '7xl'| '8xl' ;
  isSubmit?: boolean;
  disabled?: boolean;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

const Button = ({ title, color, hoverColor, type, size = "lg", isSubmit, disabled = false, onClick }: Props) => {
  return type === 'outlined' ? (
    <button
      className={` ${hoverColor && `hover:bg-[${hoverColor}]`} ${
        disabled && 'cursor-none bg-gray-300 hover:bg-none'
      } transit m-1 w-full  cursor-pointer rounded-md border-2 py-1 px-4 text-center text-${size} text-black shadow-sm`}
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
      } m-1 flex w-full cursor-pointer items-center justify-center rounded-md py-2 px-4 text-white text-${size}`}
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
