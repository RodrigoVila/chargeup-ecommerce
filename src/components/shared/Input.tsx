import React, { FC, ChangeEvent } from 'react';

type Props = {
  label: string;
  name: string;
  type: string;
  value?: string | null;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ label, name, type, value = null, disabled = false, onChange }) => {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-lg" htmlFor={name}>
        {label}
      </label>
      <input
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
