import { createContext, ReactNode, useContext, useReducer } from "react";

type Product = {
  id: any;
  title: string;
  price: string;
  quantity: number;
};
type Action = { type: "ADD_TO_CART" } | { type: "REMOVE_FROM_CART" };
type Dispatch = (action: Action) => void;
type State = { cart: Product[] };
type ProviderProps = { children: ReactNode };
type InitiaStateType = { state: State; dispatch: Dispatch } | undefined;

const initialState = {
  cart: [],
};

const CartContext = createContext<InitiaStateType>(undefined);

const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    }
    case "REMOVE_FROM_CART": {
      return { cart: (state.cart = []) };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
const CartProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CountProvider");
  }
  return context;
}
export { CartProvider, useCart };
