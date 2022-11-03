import { FormEvent } from 'react';
import { colors } from '@constants';
import Spinner from '@shared/Spinner';

interface Props {
  title: string;
  color?: string;
  hoverColor?: string;
  hoverText?: string;
  type?: 'filled' | 'outlined';
  isSubmit?: boolean;
  disabled?: boolean;
  withGradient?: boolean;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

const Button = ({
  title,
  color,
  hoverColor,
  hoverText,
  type,
  isSubmit,
  disabled = false,
  withGradient,
  onClick,
}: Props) => {
  const disabledStlye = `${
    disabled
      ? 'cursor-default bg-gray-400 hover:text-gray-200 text-gray-200 transition-none'
      : 'transition-all duration-200 ease-in-out'
  }`;

  return type === 'outlined' ? (
    <button
      className={`${disabledStlye} ${`hover:bg-[${hoverColor}]`} hover:none z-20 m-1 w-full cursor-pointer rounded-md border-2 text-center text-black shadow-sm lg:text-xl `}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      style={{ color, borderColor: color }}
      disabled={disabled}
    >
      <p className={`${disabledStlye} ${`hover:text-[${hoverText}]`} h-full w-full py-1 px-4 `}>
        {title}
      </p>
    </button>
  ) : (
    <button
      className={`${disabledStlye} ${disabled && 'hover:bg-none'} ${
        hoverColor && !disabled && `hover:bg-[${hoverColor}]`
      } ${withGradient && 'bg-gradient-to-br'} bg-[${
        withGradient ? 'transparent' : color
      }] from-purple-600 via-[${color}] z-20 m-1 flex w-full cursor-pointer items-center justify-center rounded-md to-purple-700 py-2 px-4 text-white md:text-2xl`}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      disabled={disabled}
      style={{
        color: '#fff',
        cursor: disabled ? 'default' : 'pointer',
      }}
    >
      {disabled ? (
        <Spinner color={colors.disabled} backgroundColor={colors.purple} />
      ) : (
        <p className={`h-full w-full py-1 px-4 ${hoverText && `hover:text-[${hoverText}]`}`}>
          {title}
        </p>
      )}
    </button>
  );
};

export default Button;
