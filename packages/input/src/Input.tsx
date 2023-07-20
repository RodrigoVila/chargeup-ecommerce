import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'className'> & {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const Input = ({ label, onChange, className, ...rest }: InputProps) => {
  const disabledStyles = rest.disabled ? 'bg-slate-300 text-slate-600' : ''
  return (
    <div className="w-full mb-4">
      <label className="block mb-1 text-lg" htmlFor={rest.name}>
        {label}
      </label>
      <div className="flex">
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
