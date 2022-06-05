import CartButton from '@main/Buttons/CartButton'
import RegisterLoginButton from '@main/RegisterLoginButton'
import NavItems from '@main/NavItems'
import Logo from '@main/Logo'

const TopBar = () => {
  return (
    <div className="hidden w-full xl:flex justify-between items-center">
      <Logo />
      <NavItems />
      <div className="z-20 flex justify-center items-center">
        <RegisterLoginButton />
        <CartButton />
      </div>
    </div>
  )
}

export default TopBar
