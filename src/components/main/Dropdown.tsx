import { SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { ILabelAndPrice } from 'types';

type CustomDropDownProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange' | 'className'
> & {
  label: string;
  options: string[] | object[];
  color?: string;
  className?: string;
  onChange: (option: string | ILabelAndPrice) => void;
};

const CustomDropdown = ({
  label = '',
  options,
  color = 'black',
  className = '',
  onChange,
  ...rest
}: CustomDropDownProps) => {
  const handleChange = (value: string) => onChange(JSON.parse(value));
  return (
    <div className="xl:text-sm">
      {options.length > 0 ? (
        <>
          <label htmlFor={rest.name} />
          <select
            className={twMerge(
              'w-full border border-black bg-white text-sm text-black transition-all hover:cursor-pointer py-2 px-1',
              className
            )}
            onChange={(event) => handleChange(event.target.value)}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.label} value={JSON.stringify(option)} className="capitalize">
                {typeof option === 'object' ? option.label : option}
              </option>
            ))}
          </select>
        </>
      ) : null}
    </div>
  );
};

export default CustomDropdown;
