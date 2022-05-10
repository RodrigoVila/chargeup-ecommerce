//Auth
type UserType = {
  id: number
  name: string
  email: string
}
type AuthStateType = {
  user: UserType
}

interface AuthActionType extends AuthStateType {
  type: string
}

//Cart
type CartStateType = {
  items: ProductType[]
}

interface CartActionType {
  type: string
  product: ProductType
}

//Checkout Session
type CheckoutStateType = {
  session: string
}

interface CheckoutActionType extends CheckoutStateType {
  type: string
}

// Modals
type ModalStateType = {
  drawer: boolean
  cart: boolean
  checkout: boolean
  checkout_success: boolean
  checkout_error: boolean
  product: boolean
}

interface ModalActionType extends ModalStateType {
  type: string
}

//Order
type OrderItemType = {
  id: number
  title: string
  price: number
  quantity: number
}

type OrderStateType = {
  orders: OrderItemType[]
}

type OrderActionType = {
  type: string
  order: Orderype
}

//Products
interface INutritionalInfo {
  weight: number
  calories: number
  protein: number
  carbs: number
  fat: number
}

interface ISuitableForInfo {
  protein: boolean
  vegan: boolean
  glutenFree: boolean
  keto: boolean
}

type ProductType = {
  id: string
  title: string
  description: string
  price: number
  quantity: number
  imgUri: string
  nutritionalInfo: INutritionalInfo
  suitableForInfo: ISuitableForInfo
}

type ProductsStateType = {
  products: ProductType[]
}

interface ProductsActionType extends ProductsStateType {
  type: string
}

//Toast
type ToastStateType = {
  message: string
}

interface ToastActionType extends ToastStateType {
  type: string
}

//Global State
type StateType = {
  auth: AuthActionType
  cart: CartStateType
  checkout: CheckoutStateType
  modal: ModalStateType
  orders: OrderStateType
  products: ProductStateType
  toastMessages: ToastStateType
}

//Dispatch
type DispatchType = (args: ProductActionType) => ProductActionType
type DispatchType = (args: CartAction) => CartAction
