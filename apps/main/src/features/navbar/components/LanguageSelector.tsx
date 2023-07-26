import Image from 'next/image'
import { useRouter } from 'next/router'
import { SelectHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type LanguageDetectorProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
  className?: string
}

export const LanguageSelector = ({ className, ...rest }: LanguageDetectorProps) => {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router

  const changeLocale = (newLocale: string) =>
    router.push({ pathname, query }, asPath, { locale: newLocale })

  return (
    <select
      className={twMerge('bg-transparent', className)}
      {...rest}
      onChange={(e) => changeLocale(e.target.value)}
    >
      <option key='es' value='es' selected={'es' === locale}>
        🇪🇸
      </option>
      <option key='en' value='en' selected={'en' === locale} className='p-4'>
        🇬🇧
      </option>
    </select>
  )
}
