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
  isAuthLoading: boolean;
  userLogin: StorageUserType | null;
  emailValidationError: Error | null;
  validationEmailResponse: any;
  isEmailValidated: boolean;
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
  id?: string;
  newAmount?: number;
  product: ProductType;
}

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
  drawer: boolean;
  cart: boolean;
  checkout: boolean;
  checkout_success: boolean;
  checkout_error: boolean;
  filters: boolean;
  login: boolean;
  selectedProduct: ProductType;
  productModal: boolean;
  userModal: boolean;
};

interface ModalActionType extends ModalStateType {
  type: string;
  selectedProduct: ProductType;
}

//Order

interface IOrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
type OrderItemType = {
  id: string;
  buyerId: string;
  items: IOrderItem[];
  totalAmount: number;
};

type OrderStateType = {
  order: OrderItemType;
  orderResponse: OrderItemType;
  error: string | null
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
  strapiId?: string;
};

type ProductsStateType = {
  products: ProductType[];
  areProductsLoading: boolean;
  error:null
};

interface ProductsActionType extends ProductsStateType {
  type: string;
}

//Toast
type ToastStateType = {
  message: string;
  icon?: null;
};

interface ToastActionType extends ToastStateType {
  type: string;
}

//Users
type UsersStateType = {
  isUserDataLoading: boolean;
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
