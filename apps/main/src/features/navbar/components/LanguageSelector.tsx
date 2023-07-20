import { SelectHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

type LanguageDetectorProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
  className?: string;
};

export const LanguageSelector = ({ className, ...rest }: LanguageDetectorProps) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <select
      className={twMerge('bg-transparent text-white', className)}
      onChange={(event) => changeLanguage(event.target.value)}
      {...rest}
    >
      <option value="es">🇪🇸</option>
      <option value="en">🇬🇧</option>
    </select>
  );
};