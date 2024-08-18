import { AnchorHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { AnimatedBorderBottom } from './AnimatedBorderBottom'

type NavItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string
  href?: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export const NavItem = ({
  label,
  href,
  icon,
  className,
  onClick,
  disabled,
  ...rest
}: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement | HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault()
      e.stopPropagation()
    } else if (onClick) {
      onClick()
    }
  }
  return (
    <li
      className={twMerge(
        'cursor-pointer list-none px-6 ',
        disabled && 'pointer-events-none select-none text-gray-500',
        className,
      )}
      onClick={handleClick}
    >
      <a
        className='flex items-center gap-2 py-1 pl-0 align-middle no-underline transition duration-300 ease-in-out md:py-3 md:pl-1'
        {...rest}
      >
        {icon ? <span className='mb-1'>{icon}</span> : null}

        <AnimatedBorderBottom disabled={disabled}>
          <span className='hover:font-dinBold xl:font-dinMedium mb-1 block text-sm transition-all duration-300 ease-in-out md:inline-block md:pb-0 lg:text-base'>
            {label}
          </span>
        </AnimatedBorderBottom>
      </a>
    </li>
  )
}
