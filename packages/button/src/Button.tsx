'use client'
import { ButtonHTMLAttributes, FormEvent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Spinner } from '@packages/spinner'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className'> & {
  leftIconComponent?: ReactNode
  rightIconComponent?: ReactNode
  isSubmit?: boolean
  variant?: 'filled' | 'outlined'
  loading?: boolean
  className?: string
  labelClassName?: string
}

export const Button = ({
  leftIconComponent,
  rightIconComponent,
  isSubmit,
  variant = 'filled',
  loading = false,
  className = '',
  labelClassName = '',
  ...rest
}: ButtonProps) => {
  const baseStyles =
    'group flex w-full cursor-pointer items-center justify-center rounded-md py-2 py-2 px-4'

  const variantStyles =
    variant === 'outlined'
      ? 'border border-black hover:bg-black'
      : 'bg-purple-600 hover:bg-purple-500'

  const textStyles =
    variant === 'outlined' ? 'text-black group-hover:text-white text-sm' : 'text-white text-sm'

  const iconStyle = 'h-full mx-1'

  const disabledStyles = 'disabled:border-0 disabled:bg-gray-400 disabled:cursor-default'

  const labelDisabledStyles = 'disabled:text-gray-200 disabled:hover-none'

  return loading ? (
    <button className={twMerge(baseStyles, disabledStyles)} disabled>
      <Spinner />
    </button>
  ) : (
    <button
      className={twMerge(baseStyles, variantStyles, className, disabledStyles)}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      {...rest}
    >
      {leftIconComponent && <div className={iconStyle}>{leftIconComponent}</div>}
      <p
        className={twMerge(
          'h-full w-full py-1 px-4',
          textStyles,
          labelClassName,
          labelDisabledStyles,
        )}
      >
        {rest.children}
      </p>
      {rightIconComponent && <div className={iconStyle}>{rightIconComponent}</div>}
    </button>
  )
}
