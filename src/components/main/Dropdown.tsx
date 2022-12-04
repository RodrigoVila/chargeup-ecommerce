import React, { useState,useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Button from './Buttons/Button';

interface Props {
  label: string;
  name?: string;
  options: string[] | object[];
  color?: string;
}

const CustomDropdown = ({ label = 'hola', name, options, color = 'black' }: Props) => {
  const [inputLabel, setInputLabel] = useState(label);
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  const handleClick = (option) => {
    setInputLabel(option);
    toggleOpen();
  };

  useEffect(() => {
    console.log("opt",options)
  }, [options])
  

  return (
    <div className="flex flex-col items-center justify-center mb-2">
      <div className="relative text-sm">
        <Button
          title={inputLabel}
          onClick={toggleOpen}
          className="py-1"
          type="outlined"
          color="white"
          rightIconComponent={
            isOpen ? (
              <ChevronUpIcon className="w-4 h-4 mr-1" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 mr-1" />
            )
          }
        />
        {isOpen && options.length > 0 && (
          <div className="absolute left-0 right-0 z-40 flex flex-col w-full bg-white color-black">
            {options.map((option) => {
              if (typeof option === 'object') {
                return <button className="py-2 text-black" onClick={() => handleClick(option.label)}>{option.label}</button>;
              } else {
                return <button className="py-2 text-black" onClick={() => handleClick(option)}>{option}</button>;
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
