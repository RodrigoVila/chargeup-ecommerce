import { TokenResponse } from '@react-oauth/google'
import { ReactNode } from 'react'
//Auth TODO: Divide type in login/register (w pass and extra data) user and logged in (email,token)
export type UserRegisterType = {
  email: string
  password: string
  name: string
  lastName: string
  pid: string
}

export type UserLoginType = {
  email: string
  password: string
}

export type StorageUserType = {
  email: string
  name: string
  token: string
}

export type AddressType = {
  street: string
  streetNumber: string
  extras: string
  postCode: string
  city: string
  province?: string
  country?: string
}

export type UserDetailsType = {
  id?: string
  name: string
  lastName: string
  email: string
  mobileNo: string
  address: AddressType
  password?: string
  repeatPassword?: string
  token?: string
}

export type PasswordType = {
  oldPassword: string
  password: string
}

export type AuthStateType = {
  isLoggedIn: boolean
  isLoading: boolean
  userLogin: StorageUserType | null
  isEmailValidated: boolean | null
  isTokenForPasswordValidated: boolean | null
  redirect: boolean
}

export type AuthActionType = AuthStateType & {
  type: string
}

//Cart
export type CartStateType = {
  items: CartProductType[]
}

export type CartActionType = {
  type: string
  id?: string
  newAmount?: number
  product: CartProductType
}

export type CartProductType = {
  id: string
  title: string
  selectedSize: LabelAndPriceType
  quantity: number
  suitableForInfo?: SuitableForInfoType
  selectedExtras?: LabelAndPriceType[]
  subTotal?: number
  total?: number
}

//Checkout Session
export type CheckoutStateType = {
  session: any
  sessionError: Error | null
}

export type CheckoutActionType = CheckoutStateType & {
  type: string
}

// Filters
export type FiltersStateType = {
  filters: string[]
}

export type FiltersActionType = {
  type: string
  filter: string
}

// Modals
export type ModalStateType = {
  adminProduct: boolean
  drawer: boolean
  cart: boolean
  checkout: boolean
  checkout_success: boolean
  checkout_error: boolean
  extras: boolean
  filters: boolean
  login: boolean
  product: boolean
  selectedProduct: ProductType | null
  user: boolean
}

export type ModalActionType = ModalStateType & {
  type: string
  selectedProduct: ProductType
  sizeAndExtras: any
}

export type DeliveryType = 'Pick UP' | 'Delivery'

//Order
export type OrderType = {
  id: string
  email?: string | null
  name?: string | null
  phone?: string | null
  items: CartProductType[]
  deliveryType: DeliveryType
  address?: AddressType
  totalAmount: string
  status?: string
  created: Date
}

export type OrderStateType = {
  order: OrderType | null
  orderResponse: OrderType | null
  error: string | null
}

export type OrderActionType = OrderStateType & {
  type: string
}

//Products
export type NutritionalInfoType = {
  weight: number
  calories: number
  protein: number
  carbs: number
  fat: number
}

export type SuitableForInfoType = {
  protein: boolean
  vegan: boolean
  glutenFree: boolean
  keto: boolean
}

export type ProductDescriptionType = {
  long: string[]
  short: string
}

export type LabelAndPriceType = {
  label: string
  price: number
}

export type ProductType = {
  _id: string
  title: string
  description: ProductDescriptionType
  imgUri: string
  nutritionalInfo: NutritionalInfoType
  sizes: LabelAndPriceType[] | null
  extras?: LabelAndPriceType[]
  quantity?: number
  suitableForInfo: SuitableForInfoType
}

export type ProductsStateType = {
  products: ProductType[]
  isLoading: boolean
  error: null
}

export type ProductsActionType = ProductsStateType & {
  type: string
}

//Toast
export type ToastStateType = {
  message: string
  duration?: number
  icon?: null
}

export type ToastActionType = ToastStateType & {
  type: string
}

//User
export type UserStateType = {
  isLoading: boolean
  user: UserDetailsType
}
export type UserActionType = UserStateType & {
  type: string
}

// Session
export type CheckoutItem = {
  price: string
  quantity: number
}
export type CheckoutItems = {
  items?: CheckoutItem[]
}

//Global State
export type StateType = {
  auth: AuthActionType
  cart: CartStateType
  checkout: CheckoutStateType
  modal: ModalStateType
  orders: OrderStateType
  products: ProductType[]
  toastMessages: ToastStateType
}
// Google Sign In
export type GoogleSignInSuccessResponse = Omit<
  TokenResponse,
  'error' | 'error_description' | 'error_uri'
>
export type GoogleSignInErrorResponse = Pick<
  TokenResponse,
  'error' | 'error_description' | 'error_uri'
>

// EMAIL
export type ContactFormType = {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFormStateType = {
  isContactFormLoading: boolean
}

export type ContactFormActionType = ContactFormStateType & {
  type: string
}

// Actions Menu

type GenericAction = {
  label: string
  icon: ReactNode
}

export type ActionType = 'complete' | 'edit' | 'delete'

export type ActionWithType = GenericAction & {
  type: ActionType
}

export type ActionWithOnClick = GenericAction & {
  onClick: () => void
}
