import { useState } from 'react';

interface Props {
  label: string;
  onChange: () => void;
}

const Checkbox = ({ label, onChange }: Props) => {
  const [checked, setChecked] = useState(false);

  const onChangeInput = (e: any) => {
    setChecked(e.target.checked);
    onChange();
  };

  return (
    <div className="flex items-center self-start mt-1 mb-2 cursor-pointer">
      <input
        id={label}
        type="checkbox"
        checked={checked}
        onChange={onChangeInput}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label
        htmlFor={label}
        className={`${
          checked ? 'font-bold' : 'font-normal'
        } text-md ml-2 text-black transition-all duration-200`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
