import { createSelectorHook, shallowEqual } from 'react-redux'
import type { RootState } from '~redux/store'

import { CartProductType } from '@packages/types'

export const useSelector = createSelectorHook<RootState>()

export const useAppSelector = () => {
  //Auth
  const {
    isLoggedIn,
    isLoading: isAuthLoading,
    redirect: authRedirect,
    userLogin,
    isEmailValidated,
    isTokenForPasswordValidated,
  } = useSelector((state) => state.auth, shallowEqual)

  //Cart
  const cartItems: CartProductType[] = useSelector((state) => state.cart.items, shallowEqual)
  //Checkout
  const checkoutSession = useSelector((state) => state.checkout.session, shallowEqual)

  //Products
  const { products, isLoading: areProductsLoading } = useSelector(
    (state) => state.products,
    shallowEqual,
  )

  //User
  const { user: userDetails, isLoading: isUserDataLoading } = useSelector(
    (state) => state.user,
    shallowEqual,
  )

  const { isContactFormLoading } = useSelector((state) => state.email, shallowEqual)

  return {
    isLoggedIn,
    isAuthLoading,
    authRedirect,
    userLogin,
    isEmailValidated,
    isTokenForPasswordValidated,
    checkoutSession,
    cartItems,
    products,
    areProductsLoading,
    userDetails,
    isUserDataLoading,
    isContactFormLoading,
  }
}
