import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

import { NavItem } from './NavItem'

type NavItemsProps = {
  type?: 'drawer' | 'navbar'
  className?: string
  onClick?: () => void
}

export const NavItems = ({ type, className = '', onClick }: NavItemsProps) => {
  const { t } = useTranslation()

  const links = [
    { label: t('ABOUT_US'), href: 'about' },
    { label: t('PRODUCTS'), href: 'products' },
    { label: t('CAKES'), href: 'cakes' },
    { label: t('KETO'), href: 'keto' },
    { label: t('WHY_US'), href: 'whyus' },
    { label: t('CONTACT'), href: 'contact' },
  ]
  const directionStyles =
    type === 'drawer' ? 'flex-row pl-2 text-white hidden xl:flex' : 'flex-col text-purple-600 flex'
  return (
    <ul
      className={twMerge(
        'font-dinBold z-10 w-full items-center justify-center text-center',
        directionStyles,
        className,
      )}
    >
      {links.map((link, index) => (
        <NavItem
          key={index}
          label={link.label}
          href={link.href}
          className={type === 'drawer' ? ' mx-2 xl:mx-4' : 'my-4'}
          onClick={onClick}
        />
      ))}
    </ul>
  )
}
