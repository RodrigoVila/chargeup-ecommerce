import React, { FC, ChangeEvent, InputHTMLAttributes } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setEditingField?: (field: string) => void;
};

const Input: FC<Props> = ({ label, onChange, setEditingField, className, ...rest }) => {
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
        {setEditingField && (
          <button
            className="w-6 h-6 ml-2 cursor-pointer"
            onClick={() => setEditingField(rest.name)}
          >
            <PencilIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
