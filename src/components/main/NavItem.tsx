import { FC } from 'react'

interface Props {
  label: string
  href: string
  direction: 'row' | 'column'
  icon?: any
  onClick: () => void
}

const NavItem: FC<Props> = ({ label, href, direction, icon, onClick }) => {
  return (
    <li className={`${direction === 'row' ? ' mx-2 xl:mx-4' : 'my-4'} cursor-pointer list-none`}>
      <a
        href={`#${href}`}
        onClick={onClick}
        className={`block py-1 pl-0 align-middle no-underline transition duration-300 ease-in-out md:py-3 md:pl-1`}
      >
        {icon && icon}
        <span className="block pb-1 text-sm transition-all duration-300 ease-in-out text-purple3 md:inline-block md:pb-0 lg:text-base xl:text-xl xl:font-dinMedium hover:tracking-widest hover:font-dinBold">
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
