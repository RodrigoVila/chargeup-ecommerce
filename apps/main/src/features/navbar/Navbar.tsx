import { twMerge } from 'tailwind-merge'

import { useNavbarOpacity } from '~hooks'

import {
  BurgerButton,
  CartButton,
  LanguageSelector,
  Logo,
  NavItems,
  UserButton,
} from './components'

export const Navbar = () => {
  const { backgroundOpacity } = useNavbarOpacity()

  const bgOpacity = backgroundOpacity ? backgroundOpacity : 'bg-black/0'

  return (
    <nav
      className={twMerge('h-26 fixed top-0 z-30 flex w-full justify-between xl:px-2', bgOpacity)}
    >
      {/* The next 3 comps hide/show/redistribute with Tailwind classes */}
      <div className="flex items-center justify-start flex-1 xl:hidden">
        <BurgerButton />
      </div>
      <Logo
        logo="white.png"
        className="flex items-center justify-center flex-1 xl:justify-start"
        scrollOnClick
        size="sm"
      />
      <NavItems direction="row" className="flex-1" />
      <div className="z-10 flex items-center justify-end flex-1 gap-2 mr-3">
        <LanguageSelector />
        <UserButton />
        <CartButton />
      </div>
    </nav>
  )
}
