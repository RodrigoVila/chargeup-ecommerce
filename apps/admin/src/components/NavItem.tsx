import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { AnimatedBorderBottom } from './AnimatedBorderBottom'

type NavItemProps = {
  label: string
  href?: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

export const NavItem = ({ label, href, icon, className, onClick }: NavItemProps) => {
  return (
    <li className={twMerge('cursor-pointer list-none px-6 ', className)} onClick={onClick}>
      <AnimatedBorderBottom>
        <a
          href={href && `#${href}`}
          className='flex items-center gap-2 py-1 pl-0 align-middle no-underline transition duration-300 ease-in-out md:py-3 md:pl-1'
        >
          {icon ?? null}
          <span className='hover:font-dinBold xl:font-dinMedium block pb-1 text-sm transition-all duration-300 ease-in-out md:inline-block md:pb-0 lg:text-base'>
            {label}
          </span>
        </a>
      </AnimatedBorderBottom>
    </li>
  )
}
