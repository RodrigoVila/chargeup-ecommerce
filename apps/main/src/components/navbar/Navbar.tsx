import { twMerge } from 'tailwind-merge'

import { useNavbarOpacity } from '~hooks'

import { DrawerModal, LanguageSelector, Logo, NavItems, UserModal } from '~components/navbar'
import { CartModal } from '~components/cart'

export const Navbar = () => {
  const { backgroundOpacity } = useNavbarOpacity()

  return (
    <nav
      className={twMerge(
        'fixed top-0 z-10 flex h-max w-full justify-between bg-black/50 px-4 xl:px-2',
        backgroundOpacity,
      )}
    >
      {/* The next 3 comps hide/show/redistribute with Tailwind classes */}
      <div className='flex flex-1 items-center justify-start gap-3 xl:hidden'>
        <DrawerModal />
        <LanguageSelector className='text-white' />
      </div>
      <div className='flex flex-1 items-center justify-center gap-2 xl:justify-start'>
        <Logo scrollOnClick size='sm' />
        <LanguageSelector className='hidden text-white xl:block' />
      </div>
      <NavItems type='navbar' className='flex-1' />
      <div className='flex flex-1 items-center justify-end md:mr-3 md:gap-2'>
        <UserModal />
        <CartModal />
      </div>
    </nav>
  )
}
