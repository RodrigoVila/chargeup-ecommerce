import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Button from './Buttons/Button';

interface Props {
  label: string;
  name?: string;
  options: string[] | object[];
  color?: string;
  className?: string;
  onChange: (option: string | ILabelAndPrice) => void;
}

const CustomDropdown = ({
  label = '',
  name,
  options,
  color = 'black',
  className = '',
  onChange,
}: Props) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  const handleClick = (option: string | ILabelAndPrice) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className={`xl:text-sm`}>
      <label htmlFor={name} />
      {isOpen && options.length > 0 ? (
        <select
          className={`w-full border border-black bg-white text-sm text-black transition-all hover:cursor-pointer ${className}`}
        >
          {options.map((option, index) => (
            <option key={index} onClick={() => handleClick(option)}>
              {typeof option === 'object' ? option.label : option}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default CustomDropdown;
