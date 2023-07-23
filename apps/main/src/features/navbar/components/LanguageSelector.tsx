import Link from 'next/link';
import { useRouter } from 'next/router';
import { SelectHTMLAttributes } from 'react';
import { useIntl } from 'react-intl';
import { twMerge } from 'tailwind-merge';

type LanguageDetectorProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
  className?: string;
};

export const LanguageSelector = ({ className, ...rest }: LanguageDetectorProps) => {
  const { locale, locales, asPath } = useRouter();

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <select className={twMerge('bg-transparent text-white', className)} {...rest}>
      {locales.map((l) => (
        <Link href={asPath}>
          <option value={l}>{l}</option>
        </Link>
      ))}
    </select>
  );
};
