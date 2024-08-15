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
  console.log({ label, href })
  return (
    <li className={twMerge('cursor-pointer list-none bg-slate-800', className)} onClick={onClick}>
      <a
        href={href && `#${href}`}
        className='block align-middle no-underline transition duration-300 ease-in-out md:py-3 md:pl-1'
      >
        {icon ?? null}
        <span className='hover:font-dinBold xl:font-dinMedium block pb-1 text-sm text-white transition-all duration-300 ease-in-out md:inline-block md:pb-0 lg:text-base xl:text-xl'>
          {label}
        </span>
      </a>
    </li>
  )
}
