import { twMerge } from 'tailwind-merge'

import { useNavbarOpacity } from '~hooks'

import {
  BurgerButton,
  // CartButton,
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
      <div className='flex flex-1 items-center justify-start xl:hidden'>
        <BurgerButton />
      </div>
      <div className='flex flex-1 items-center justify-center gap-4 xl:justify-start'>
        <Logo logo='white.png' scrollOnClick size='sm' />
        <LanguageSelector className='hidden text-white xl:block' />
      </div>
      <NavItems type='navbar' className='flex-1' />
      <div className='z-10 flex flex-1 items-center justify-end md:mr-3 md:gap-2'>
        <UserButton />
        {/* <CartButton /> */}
      </div>
    </nav>
  )
}
