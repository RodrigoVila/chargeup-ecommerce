import { useRouter } from 'next/router';
import { SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type LanguageDetectorProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
  className?: string;
};

export const LanguageSelector = ({ className, ...rest }: LanguageDetectorProps) => {
  const router = useRouter();
  const { pathname, asPath, query, locales, locale } = router;

  const changeLocale = (newLocale: string) =>
    router.push({ pathname, query }, asPath, { locale: newLocale });

  return (
    <select
      className={twMerge('bg-transparent text-xl', className)}
      {...rest}
      onChange={(e) => changeLocale(e.target.value)}
    >
      {locales.map((l) => (
        <option key={l} value={l} selected={l === locale}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
