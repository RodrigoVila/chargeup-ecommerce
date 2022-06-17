import CartButton from '@main/Buttons/CartButton'
import RegisterLoginButton from '@main/RegisterLoginButton'
import NavItems from '@main/NavItems'
import Logo from '@main/Logo'

const TopBar = () => {
  return (
    <div className="hidden w-full items-center justify-between xl:flex">
      <Logo />
      <NavItems direction="row" />
      <div className="z-20 flex items-center justify-center">
        <RegisterLoginButton />
        <CartButton />
      </div>
    </div>
  )
}

export default TopBar
