import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type NavItemProps = {
  label: string
  href?: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

export const NavItem = ({ label, href, icon, className, onClick }: NavItemProps) => {
  return (
    <li className={twMerge('cursor-pointer list-none', className)} onClick={onClick}>
      <a
        href={href && `#${href}`}
        className='block py-1 pl-0 align-middle no-underline transition duration-300 ease-in-out md:py-3 md:pl-1'
      >
        {icon ?? null}
        <span className='text-purple3 hover:font-dinBold xl:font-dinMedium block pb-1 text-sm transition-all duration-300 ease-in-out hover:tracking-widest md:inline-block md:pb-0 lg:text-base xl:text-xl'>
          {label}
        </span>
      </a>
    </li>
  )
}
