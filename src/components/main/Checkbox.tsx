import React, { ChangeEvent, useEffect, useState } from 'react';

interface Props {
  label: string;
  name: string;
  onChange: (label: string) => void;
}

const Checkbox = ({ label, name, onChange }: Props) => {
  const [isChecked, setChecked] = useState(false);

  const onClick = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(label);
  };

  useEffect(() => {
    console.log(label, isChecked);
  }, [isChecked]);

  return (
    <div className="flex items-center mt-1 mb-2">
      <input
        id={name}
        type="checkbox"
        value=""
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        onChange={onClick}
      />
      <label
        htmlFor={name}
        className={`${
          isChecked ? 'font-bold' : 'font-normal'
        } ml-2 text-md text-black transition-all duration-200`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
