import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type NavItemProps = {
  label: string
  href?: string
  direction: 'row' | 'column'
  icon?: ReactNode
  onClick: () => void
}

export const NavItem = ({ label, href, direction, icon, onClick }: NavItemProps) => {
  const directionStyles = direction === 'row' ? ' mx-2 xl:mx-4' : 'my-4'

  return (
    <li className={twMerge('cursor-pointer list-none', directionStyles)}>
      <a
        href={href && `#${href}`}
        onClick={onClick}
        className="block py-1 pl-0 no-underline align-middle transition duration-300 ease-in-out md:py-3 md:pl-1"
      >
        {icon ?? null}
        <span className="block pb-1 text-sm transition-all duration-300 ease-in-out text-purple3 hover:font-dinBold xl:font-dinMedium hover:tracking-widest md:inline-block md:pb-0 lg:text-base xl:text-xl">
          {label}
        </span>
      </a>
    </li>
  )
}
