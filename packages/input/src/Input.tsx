import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'className'> & {
  label?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  labelClassName?: string
}

export const Input = ({ label, onChange, className, labelClassName, ...rest }: InputProps) => {
  const disabledStyles = rest.disabled ? 'bg-slate-300 text-slate-600' : ''
  return (
    <div className='mb-4 w-full'>
      {label ? (
        <label className={twMerge('mb-1 block text-lg', labelClassName)} htmlFor={rest.name}>
          {label}
        </label>
      ) : null}

      <div className='flex'>
        <input
          className={twMerge(
            'focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none',
            className,
            disabledStyles,
          )}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  )
}
