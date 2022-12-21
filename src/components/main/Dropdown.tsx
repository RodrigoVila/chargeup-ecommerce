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
    <div className={`${className} flex w-full flex-col items-center justify-center xl:text-sm`}>
      <div className="relative w-full text-sm">
        <Button
          title={label}
          onClick={toggle}
          className="w-full py-1 rounded-none xl:text-sm"
          type="outlined"
          color={color}
          rightIconComponent={
            isOpen ? (
              <ChevronUpIcon className="w-4 h-4 mr-1" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 mr-1" />
            )
          }
        />
        {isOpen && options.length > 0 && (
          <div
            className={`absolute left-0 right-0 z-40 flex w-full flex-col border border-t-0 bg-white border-[${color}] color-[${color}]`}
          >
            {options.map((option,index) => {
              if (typeof option === 'object') {
                return (
                  <button key={index} className="py-2 text-black" onClick={() => handleClick(option)}>
                    {option.label}
                  </button>
                );
              } else {
                return (
                  <button key={index} className="py-2 text-black" onClick={() => handleClick(option)}>
                    {option}
                  </button>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
