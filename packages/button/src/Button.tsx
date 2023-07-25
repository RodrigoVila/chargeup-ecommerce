'use client'

// import Spinner from '@packages/spinner';
import { ButtonHTMLAttributes, FormEvent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import {Spinner} from '@packages/spinner'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className'> & {
  leftIconComponent?: ReactNode
  rightIconComponent?: ReactNode
  isSubmit?: boolean
  type?: 'filled' | 'outlined'
  loading?: boolean
  className?: string
  labelClassName?: string
}

export const Button = ({
  leftIconComponent,
  rightIconComponent,
  isSubmit,
  type = 'filled',
  loading = false,
  className = '',
  labelClassName = '',
  ...rest
}: ButtonProps) => {
  const baseStyles =
    'group z-20 flex w-full cursor-pointer items-center justify-center rounded-md py-2 py-2 px-4'

  const typeStyles =
    type === 'outlined'
      ? 'border border-black hover:bg-black'
      : 'bg-purple-700 hover:bg-fuchsia-600'

  const textStyles =
    type === 'outlined' ? 'text-black group-hover:text-white text-sm' : 'text-white text-sm'

  const iconStyle = 'h-full mx-1'

  const disabledStyles = 'text-gray-200 bg-gray-400 disabled:bg-gray-400 cursor-default'

  return loading ? (
    <button className={twMerge(baseStyles, disabledStyles)} disabled>
      <Spinner />
    </button>
  ) : (
    <button
      className={twMerge(baseStyles, typeStyles, className, rest.disabled && disabledStyles)}
      type={isSubmit ? 'submit' : 'button'}
      role={isSubmit ? 'link' : 'button'}
      {...rest}
    >
      {leftIconComponent && <div className={iconStyle}>{leftIconComponent}</div>}
      <p className={twMerge('h-full w-full py-1 px-4', textStyles, labelClassName)}>
        {rest.children}
      </p>
      {rightIconComponent && <div className={iconStyle}>{rightIconComponent}</div>}
    </button>
  )
}
