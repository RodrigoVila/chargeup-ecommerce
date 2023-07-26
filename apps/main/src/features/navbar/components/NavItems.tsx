import { useIntl } from 'react-intl'
import { twMerge } from 'tailwind-merge'

import { NavItem } from './NavItem'

type NavItemsProps = {
  type: 'drawer' | 'navbar'
  className?: string
  onClick?: () => void
}

export const NavItems = ({ type, className = '', onClick }: NavItemsProps) => {
  const { formatMessage } = useIntl()

  const links = [
    { label: formatMessage({ id: 'ABOUT_US' }), href: 'about' },
    { label: formatMessage({ id: 'PRODUCTS' }), href: 'products' },
    { label: formatMessage({ id: 'CAKES' }), href: 'cakes' },
    { label: formatMessage({ id: 'KETO' }), href: 'keto' },
    { label: formatMessage({ id: 'WHY_US' }), href: 'whyus' },
    { label: formatMessage({ id: 'CONTACT' }), href: 'contact' },
  ]
  const directionStyles =
    type === 'navbar' ? 'flex-row pl-2 text-white hidden xl:flex' : 'flex-col text-purple-600 flex'
  return (
    <ul
      className={twMerge(
        'font-dinBold z-10 w-full items-center justify-center gap-4 text-center',
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
