import { twMerge } from 'tailwind-merge'

import { NavItem } from './NavItem'

type NavItemsProps = {
  type: 'drawer' | 'navbar'
  className?: string
  onClick?: () => void
}

export const NavItems = ({ type, className = '', onClick }: NavItemsProps) => {
  const links = [
    { label: 'Dashboard', href: 'dashboard' },
    { label: 'Orders', href: 'orders' },
    { label: 'Customers', href: 'customers' },
    { label: 'Products', href: 'products' },
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
          className={type === 'navbar' ? ' mx-2 xl:mx-4' : 'my-4'}
          onClick={onClick}
        />
      ))}
    </ul>
  )
}
