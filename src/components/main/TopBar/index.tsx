import { useState } from 'react'
import CartButton from '@main/Buttons/CartButton'
import RegisterLoginButton from '@main/RegisterLoginButton'
import NavItems from '@main/NavItems'
import Logo from '@main/Logo'
import BackgroundOverlay from 'components/main/BackgroundOverlay'

const TopBar = () => {
  return (
    <div className="hidden w-full flex-col xl:flex">
      <div className="mx-auto">
        <Logo />
      </div>
      <div className="relative flex flex-row items-center justify-between pt-2 pr-4">
        <>
          <div className="h-2 w-2" />
        </>
        <>
          <NavItems />
        </>
        <div className="flex flex-row ">
          <RegisterLoginButton />
          <CartButton />
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-purple-700 py-4 text-2xl text-white">
        TEXTO CARROUSEL EN MOVIMIENTO
      </div>
    </div>
  )
}

export default TopBar
