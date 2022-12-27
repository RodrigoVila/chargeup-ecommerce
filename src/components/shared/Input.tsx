import React, { FC, ChangeEvent } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

type Props = {
  label: string;
  name: string;
  type: string;
  value?: string | null;
  disabled?: boolean;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setEditingField?: (field: string) => void;
};

const Input: FC<Props> = ({
  label,
  name,
  type,
  value,
  disabled = false,
  placeholder = '',
  onChange,
  setEditingField,
}) => {
  return (
    <div className="w-full mb-4">
      <label className="block mb-1 text-lg" htmlFor={name}>
        {label}
      </label>
      <div className="flex">
        <input
          className={`${
            disabled && 'bg-slate-300 text-slate-600'
          } focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none`}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
        />
        {setEditingField && (
          <button className="w-6 h-6 ml-2 cursor-pointer" onClick={() => setEditingField(name)}>
            <PencilIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
