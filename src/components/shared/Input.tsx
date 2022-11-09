import React, { FC, ChangeEvent } from 'react';

type Props = {
  label: string;
  name: string;
  type: string;
  value?: string | null;
  disabled?: boolean;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
  label,
  name,
  type,
  value = null,
  disabled = false,
  placeholder = '',
  onChange,
}) => {
  return (
    <div className="w-full mb-4">
      <label className="block mb-1 text-lg" htmlFor={name}>
        {label}
      </label>
      <input
        className={`${
          disabled && 'bg-slate-200 text-slate-600'
        } focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none`}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
