import { FormEvent, ReactNode } from 'react';
import { colors } from '@constants';
import Spinner from '@shared/Spinner';

interface Props {
  title: string;
  color?: string;
  hoverColor?: string;
  hoverText?: string;
  leftIconComponent?: ReactNode;
  rightIconComponent?: ReactNode;
  type?: 'filled' | 'outlined';
  className?: string;
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
  leftIconComponent,
  rightIconComponent,
  className = '',
  type,
  isSubmit,
  disabled = false,
  withGradient,
  onClick,
}: Props) => {
  const disabledStlye = `${
    disabled
      ? 'cursor-default bg-gray-400 hover:text-gray-200 text-gray-200 transition-none hover:bg-none'
      : 'transition-all duration-200 ease-in-out'
  }`;

  const hoverColorStyle = `${hoverColor && !disabled && `hover:bg-[${hoverColor}]`}`;

  const iconStyle = 'h-full mx-1';

  return type === 'outlined' ? (
    <button
      className={`${className} ${disabledStlye} ${`hover:bg-[${hoverColor}]`} hover:none items-center justify-between z-20 flex w-full cursor-pointer rounded-md border text-black shadow-sm lg:text-xl `}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      style={{ color, borderColor: color }}
      disabled={disabled}
    >
      {leftIconComponent && <div className={iconStyle}>{leftIconComponent}</div>}
      <p className={`${disabledStlye} ${`hover:text-[${hoverText}]`} h-full w-full py-1 px-4`}>
        {title}
      </p>
      {rightIconComponent && <div className={iconStyle}>{rightIconComponent}</div>}
    </button>
  ) : (
    <button
      className={`${className} ${disabledStlye} ${hoverColorStyle} ${
        withGradient && 'bg-gradient-to-br'
      } bg-[${
        withGradient ? 'transparent' : color
      }] from-purple-600 via-[${color}] z-20 flex w-full cursor-pointer items-center justify-center rounded-md to-purple-700 py-2 px-4 text-white text-sm`}
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
        <>
          {leftIconComponent && <div className={iconStyle}>{leftIconComponent}</div>}
          <p className={`h-full w-full py-1 px-4 ${hoverText && `hover:text-[${hoverText}]`}`}>
            {title}
          </p>
          {rightIconComponent && <div className={iconStyle}>{rightIconComponent}</div>}
        </>
      )}
    </button>
  );
};

export default Button;
