import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { AnimatedBorderBottom } from './AnimatedBorderBottom'
import { Link, LinkProps } from 'react-router-dom'

type NavItemProps = LinkProps & {
  label: string
  icon?: ReactNode
  className?: string
  disabled?: boolean
}

export const NavItem = ({ label, icon, className, disabled, ...rest }: NavItemProps) => {
  return (
    <li
      className={twMerge(
        'cursor-pointer list-none px-6 ',
        disabled && 'pointer-events-none select-none text-gray-500',
        className,
      )}
    >
      <Link
        className='flex items-center gap-2 py-1 pl-0 align-middle no-underline transition duration-300 ease-in-out md:py-3 md:pl-1'
        aria-disabled={disabled}
        {...rest}
      >
        {icon ? <span className='mb-1'>{icon}</span> : null}

        <AnimatedBorderBottom disabled={disabled}>
          <span className='hover:font-dinBold xl:font-dinMedium mb-1 block text-xl transition-all duration-300 ease-in-out md:inline-block md:pb-0 lg:text-base'>
            {label}
          </span>
        </AnimatedBorderBottom>
      </Link>
    </li>
  )
}
