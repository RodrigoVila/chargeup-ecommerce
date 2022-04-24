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

type ProductStateType = {
  products: ProductType[]
}

interface ProductsActionType extends ProductStateType {
  type: string
}

//Cart
type CartStateType = {
  cart: ProductType[]
}

interface CartActionType extends CartStateType {
  type: string
}

//Toast
type ToastStateType = {
  message: string
}

interface ToastActionType extends ToastStateType {
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

type StateType = {
  cart: ProductType[]
  orders: OrderItemType[]
  products: ProductType[]
  modal: ModalStateType
}

//User
type UserType = {
  id: number
  title: string
  description: string
  nutritionalInfo: INutritionalInfo
  suitableForInfo: string[]
  price: number
  imgUri: string
  quantity?: number
}

type ProductStateType = ProductType[]

type ProductActionType = {
  type: string
  product: ProductType
}

//Checkout Session
type CheckoutStateType = {
  checkoutSession: any
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
}

interface ModalActionType extends ModalStateType {
  type: string
}

//Dispatch
type DispatchType = (args: ProductActionType) => ProductActionType
type DispatchType = (args: CartAction) => CartAction
