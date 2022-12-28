declare module 'flowbite/plugin';

//Auth TODO: Divide type in login/register (w pass and extra data) user and logged in (email,token)
type UserRegisterType = {
  email: string;
  password: string;
  name: string;
  lastName: string;
  pid: string;
};

type UserLoginType = {
  email: string;
  password: string;
};

type StorageUserType = {
  email: string;
  name: string;
  token: string;
};

type UserDetailsType = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password?: string;
  repeatPassword?: string;
  token?: string;
  mobileNo: string;
  prefixNo: string;
  prefContact: string[];
  location: {
    street: string;
    streetNumber: string;
    postCode: string;
    city: string;
    province: string;
    country: string;
    extras: string;
  };
};

type PasswordType = {
  oldPassword: string;
  password: string;
};

type AuthStateType = {
  isLoggedIn: boolean;
  isLoading: boolean;
  userLogin: StorageUserType | null;
  isEmailValidated: boolean;
};

interface AuthActionType extends AuthStateType {
  type: string;
}

//Cart
type CartStateType = {
  items: CartProductType[];
};

interface CartActionType {
  type: string;
  id?: string;
  newAmount?: number;
  product: CartProductType;
}

type CartProductType = {
  id: string;
  title: string;
  selectedSize: ILabelAndPrice;
  quantity: number;
  suitableForInfo?: ISuitableForInfo;
  selectedExtras?: ILabelAndPrice[] | null;
  subTotal?: number;
  total?: number;
};

interface ITotal {
  total: number;
};

//Checkout Session
type CheckoutStateType = {
  session: string | null;
  sessionError: Error | null;
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
  adminProduct: boolean;
  drawer: boolean;
  cart: boolean;
  checkout: boolean;
  checkout_success: boolean;
  checkout_error: boolean;
  extras: boolean;
  filters: boolean;
  login: boolean;
  product: boolean;
  selectedProduct: ProductType;
  user: boolean;
};

interface ModalActionType extends ModalStateType {
  type: string;
  selectedProduct: ProductType;
  sizeAndExtras: any;
}

//Order
type OrderType = {
  id: string,
  email?: string,
  name?:string,
  items: CartProductType[],
  totalAmount: string,
  status?:string,
  created: Date
}

type OrderStateType = {
  order: OrderType;
  orderResponse: OrderType;
  error: string | null;
};

interface OrderActionType extends OrderStateType {
  type: string;
}

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

interface IProductDescription {
  long: string[];
  short: string;
}

interface ILabelAndPrice {
  label: string;
  price: number;
}

type ProductType = {
  _id: string;
  title: string;
  description: IProductDescription;
  imgUri: string;
  nutritionalInfo: INutritionalInfo;
  sizes: ILabelAndPrice[];
  extras?: ILabelAndPrice[];
  quantity?: number;
  suitableForInfo: ISuitableForInfo;
};

type ProductsStateType = {
  products: ProductType[];
  isLoading: boolean;
  error: null;
};

interface ProductsActionType extends ProductsStateType {
  type: string;
}

//Toast
type ToastStateType = {
  message: string;
  duration?: number;
  icon?: null;
};

interface ToastActionType extends ToastStateType {
  type: string;
}

//Users
type UsersStateType = {
  isLoading: boolean;
  user: UserDetailsType;
  users: UserDetailsType[];
};
interface UsersActionType extends UsersStateType {
  type: string;
}

// Session
type CheckoutItem = {
  price: string;
  quantity: number;
};
type CheckoutItems = {
  items?: CheckoutItem[];
};

//Global State
type StateType = {
  auth: AuthActionType;
  cart: CartStateType;
  checkout: CheckoutStateType;
  modal: ModalStateType;
  orders: OrderStateType;
  products: ProductType[];
  toastMessages: ToastStateType;
};

//Dispatch
type DispatchType = (args: ProductActionType) => ProductActionType;
type DispatchType = (args: CartAction) => CartAction;
