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

export const openCartModal = () => ({ type: OPEN_CART })
export const closeCartModal = () => ({ type: CLOSE_CART })
export const openCheckoutModal = () => ({ type: OPEN_CHECKOUT })
export const closeCheckoutModal = () => ({ type: CLOSE_CHECKOUT })
export const openCheckoutSuccessModal = () => ({ type: OPEN_CHECKOUT_SUCCESS })
export const closeCheckoutSuccessModal = () => ({ type: CLOSE_CHECKOUT_SUCCESS })
export const openCheckoutErrorModal = () => ({ type: OPEN_CHECKOUT_ERROR })
export const closeCheckoutErrorModal = () => ({ type: CLOSE_CHECKOUT_ERROR })
export const openDrawerModal = () => ({ type: OPEN_DRAWER })
export const closeDrawerRModal = () => ({ type: CLOSE_DRAWER })
export const openFiltersModal = () => ({ type: OPEN_FILTERS })
export const closeFiltersModal = () => ({ type: CLOSE_FILTERS })
export const openProductModal = (selectedProduct: ProductType) => ({
  type: OPEN_PRODUCT_DETAILS,
  selectedProduct,
})
export const closeProductModal = () => ({ type: CLOSE_PRODUCT_DETAILS })
