import DrawerModal from '@main/Modal/DrawerModal'
import BurgerButton from '@main/Buttons/BurgerButton'
import Logo from '@main/Logo'
import CartButton from '@main/Buttons/CartButton'

const MobileTopBar = () => {
  return (
    <>
      <DrawerModal />
      <div className="flex w-full justify-between xl:hidden">
        <BurgerButton />
        <Logo />
        <CartButton />
      </div>
    </>
  )
}

export default MobileTopBar
