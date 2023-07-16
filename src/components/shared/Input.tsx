import React, { FC, ChangeEvent, InputHTMLAttributes } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ label, onChange, className, ...rest }) => {
  const disabledStyles = rest.disabled ? 'bg-slate-300 text-slate-600' : '';
  return (
    <div className="w-full mb-4">
      <label className="block mb-1 text-lg" htmlFor={rest.name}>
        {label}
      </label>
      <div className="flex">
        <input
          className={twMerge(
            'focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none',
            disabledStyles,
            className
          )}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
