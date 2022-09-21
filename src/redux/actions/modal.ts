import {
  OPEN_CART,
  CLOSE_CART,
  OPEN_CHECKOUT,
  CLOSE_CHECKOUT,
  OPEN_CHECKOUT_SUCCESS,
  CLOSE_CHECKOUT_SUCCESS,
  OPEN_CHECKOUT_ERROR,
  CLOSE_CHECKOUT_ERROR,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  OPEN_FILTERS,
  CLOSE_FILTERS,
  OPEN_PRODUCT_DETAILS,
  CLOSE_PRODUCT_DETAILS,
} from './types'

export const cartModalOpen = () => ({ type: OPEN_CART })
export const cartModalClose = () => ({ type: CLOSE_CART })
export const checkoutModalOpen = () => ({ type: OPEN_CHECKOUT })
export const checkoutModalClose = () => ({ type: CLOSE_CHECKOUT })
export const checkoutSuccessModalOpen = () => ({ type: OPEN_CHECKOUT_SUCCESS })
export const checkoutSuccessModalClose = () => ({ type: CLOSE_CHECKOUT_SUCCESS })
export const checkoutErrorModalOpen = () => ({ type: OPEN_CHECKOUT_ERROR })
export const checkoutErrorModalClose = () => ({ type: CLOSE_CHECKOUT_ERROR })
export const drawerModalOpen = () => ({ type: OPEN_DRAWER })
export const drawerModalClose = () => ({ type: CLOSE_DRAWER })
export const filtersModalOpen = () => ({ type: OPEN_FILTERS })
export const filtersModalClose = () => ({ type: CLOSE_FILTERS })
export const productModalOpen = (selectedProduct: ProductType) => ({
  type: OPEN_PRODUCT_DETAILS,
  selectedProduct,
})
export const productModalClose = () => ({ type: CLOSE_PRODUCT_DETAILS })
