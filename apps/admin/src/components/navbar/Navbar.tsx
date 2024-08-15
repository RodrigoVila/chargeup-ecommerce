import { BurgerButton, DrawerModal, LanguageSelector, Logo, NavItems } from './components'
import { useState } from 'react'

export const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => setModalOpen((prev) => !prev)

  return (
    <>
      <nav className='h-26 fixed top-0 z-30 flex w-full justify-between bg-purple-900 xl:px-2'>
        {/* The next 3 comps hide/show/redistribute with Tailwind classes */}
        <div className='flex flex-1 items-center justify-start xl:hidden'>
          <BurgerButton isOpen={isModalOpen} toggle={toggleModal} />
        </div>
        <div className='flex flex-1 items-center justify-center gap-4 xl:justify-start'>
          <Logo logo='white.png' scrollOnClick size='sm' />
          {/* <LanguageSelector className='hidden text-white xl:block' /> */}
        </div>
        <NavItems type='navbar' className='flex-1' />
      </nav>

      <DrawerModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  )
}
