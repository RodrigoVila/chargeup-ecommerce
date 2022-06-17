import { FC } from 'react'

interface Props {
  label: string
  href: string
  direction: 'row' | 'column'
  isLast: boolean
  icon?: any
  onClick: () => void
}

const NavItem: FC<Props> = ({ label, href, direction, isLast, icon, onClick }) => {
  return (
    <li
      className={`${direction === 'row' ? ' mr-16' : 'mb-16'} ${
        isLast && 'mb-0 mr-0'
      } cursor-pointer list-none `}
    >
      <a
        href={`#${href}`}
        onClick={onClick}
        className={`block py-1 pl-0 align-middle no-underline transition duration-300  ease-in-out md:py-3 md:pl-1`}
      >
        {icon && icon}
        <span className="text-purple3 block pb-1 text-xs font-semibold md:inline-block md:pb-0 md:text-base lg:text-2xl">
          {label}
        </span>
      </a>
    </li>
    // <div
    //   className="flex px-8 py-4 text-white cursor-pointer text-l hover:bg-pink-400"
    //   onClick={goTo}
    // >
    //   {icon}
    //   {label}
    // </div>
  )
}

export default NavItem
