import { useState } from 'react'
import CartButton from '@main/CartButton'
import BurgerButton from '@main/BurgerButton'
import Logo from '@main/Logo'
import DrawerModal from '@main/DrawerModal'
import { displayInfoMessage } from '@redux/actionCreators/toastNotifications'
import { useAppDispatch } from '@hooks'

const MobileTopBar = () => {
  return (
    <>
      <DrawerModal />

      <div className="z-20 flex w-full justify-between xl:hidden">
        <BurgerButton />
        <Logo />
        <CartButton />
      </div>
    </>
  )
}

export default MobileTopBar
