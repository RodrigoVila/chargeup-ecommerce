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
  diabetic: boolean
  keto: boolean
}

//Products
type ProductType = {
  _id: string
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

type ProductActionType = {
  type: string
  product: ProductType
}

//Cart
type CartStateType = {
  cart: ProductType[]
}

type CartActionType = {
  type: string
  cart: ProductType[]
}

//Toast
type ToastStateType = {
  message: string
}

type ToastActionType = {
  type: string
  message: string
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

type DispatchType = (args: ProductActionType) => ProductActionType
type DispatchType = (args: CartAction) => CartAction
