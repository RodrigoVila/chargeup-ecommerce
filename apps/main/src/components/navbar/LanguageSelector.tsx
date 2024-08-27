import Image from 'next/legacy/image'
import { useRouter } from 'next/router'
import { SelectHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import britishFlag from '@packages/assets/images/british-flag.png'
import spainFlag from '@packages/assets/images/spain-flag.png'

type LanguageDetectorProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
  className?: string
}

export const LanguageSelector = ({ className, ...rest }: LanguageDetectorProps) => {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router

  const changeLocale = (newLocale: string) =>
    router.push({ pathname, query }, asPath, { locale: newLocale })

  return locale ? (
    <select
      className={twMerge('bg-transparent text-2xl text-black', className)}
      {...rest}
      onChange={(e) => changeLocale(e.target.value)}
    >
      <option key='es' value='es' defaultChecked={'es' === locale} className='text-xl text-black'>
        🇪🇸
      </option>
      <option key='en' value='en' defaultChecked={'en' === locale} className='text-xl text-black'>
        🇬🇧
      </option>
    </select>
  ) : null
}
