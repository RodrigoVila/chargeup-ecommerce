//Auth TODO: Divide type in login/register (w pass and extra data) user and logged in (email,token)
type UserType = {
  id?: number;
  email: string;
  password?: string;
  name?: string;
  name?: string;
  lastname?: string;
  token: string;
};
type AuthStateType = {
  user: UserType;
};

interface AuthActionType extends AuthStateType {
  type: string;
}

//Cart
type CartStateType = {
  items: ProductType[];
};

interface CartActionType {
  type: string;
  product: ProductType;
}

//Checkout Session
type CheckoutStateType = {
  session: string;
};

interface CheckoutActionType extends CheckoutStateType {
  type: string;
}

// Filters
type FiltersStateType = {
  filters: string[];
};

interface FiltersActionType {
  type: string;
  filter: string;
}

// Modals
type ModalStateType = {
  drawer: boolean;
  cart: boolean;
  checkout: boolean;
  checkout_success: boolean;
  checkout_error: boolean;
  filters: boolean;
  selectedProduct: ProductType;
  productModal: boolean;
};

interface ModalActionType extends ModalStateType {
  type: string;
  selectedProduct: ProductType;
}

//Order
type OrderItemType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type OrderStateType = {
  orders: OrderItemType[];
};

type OrderActionType = {
  type: string;
  order: Orderype;
};

//Products
interface INutritionalInfo {
  weight: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface ISuitableForInfo {
  protein: boolean;
  vegan: boolean;
  glutenFree: boolean;
  keto: boolean;
}

type ProductType = {
  id: string;
  title: string;
  description: {
    short: string;
    long: string[];
  };
  price: number;
  quantity: number;
  imgUri: string;
  nutritionalInfo: INutritionalInfo;
  suitableForInfo: ISuitableForInfo;
};

type ProductsStateType = {
  products: ProductType[];
};

interface ProductsActionType extends ProductsStateType {
  type: string;
}

//Toast
type ToastStateType = {
  message: string;
};

interface ToastActionType extends ToastStateType {
  type: string;
}

//Global State
type StateType = {
  auth: AuthActionType;
  cart: CartStateType;
  checkout: CheckoutStateType;
  modal: ModalStateType;
  orders: OrderStateType;
  products: ProductStateType;
  toastMessages: ToastStateType;
};

//Dispatch
type DispatchType = (args: ProductActionType) => ProductActionType;
type DispatchType = (args: CartAction) => CartAction;
