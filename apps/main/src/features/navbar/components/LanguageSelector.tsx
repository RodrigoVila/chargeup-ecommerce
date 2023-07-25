import Link from 'next/link';
import { useRouter } from 'next/router';
import { SelectHTMLAttributes } from 'react';
import { useIntl } from 'react-intl';
import { twMerge } from 'tailwind-merge';

type LanguageDetectorProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
  className?: string;
};

export const LanguageSelector = ({ className, ...rest }: LanguageDetectorProps) => {
  const { locales, asPath } = useRouter();

  return (
    <select className={twMerge('bg-transparent text-xl', className)} {...rest}>
      {locales.map((l) => (
        <Link href={asPath} key={l}>
          <option value={l}>{l.toUpperCase()}</option>
        </Link>
      ))}
    </select>
  );
};
