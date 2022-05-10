import { FC } from 'react'

interface Props {
  label: string
  icon?: any
  borderColor?: string
  onClick: () => void
}

const NavItem: FC<Props> = ({ label, icon, borderColor = 'transparent', onClick }) => {
  return (
    <li className="mr-16 cursor-pointer list-none " onClick={onClick}>
      <a
        className={`block py-1 pl-0 align-middle text-white no-underline hover:text-white md:py-3 md:pl-1 hover:border-${borderColor}-500 transition duration-300 ease-in-out`}
      >
        {icon && icon}
        <span className="text-purple3 block pb-1 text-xs font-semibold md:inline-block md:pb-0 md:text-base lg:text-3xl">
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
