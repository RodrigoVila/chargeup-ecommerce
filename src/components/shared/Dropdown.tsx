import { ReactNode, SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { ILabelAndPrice } from 'types';

type OptionObject = {
  label:string
  icon?: ReactNode
}

type CustomDropDownProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange' | 'className'
> & {
  options: string[] | OptionObject[];
  className?: string;
  onChange: (option: string | OptionObject) => void;
};

const CustomDropdown = ({
  options,
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
                {typeof option === 'object' && option.icon || null}
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
