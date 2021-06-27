import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";

interface ICartContext {
  cart: string[];
}

interface Props {
  children: ReactNode;
}

const initialState: ICartContext = {
  cart: [],
};

const AppContext = createContext<ICartContext>(initialState);

const useCart = () => {
  return useContext(AppContext);
};

const StateProvider = ({ children }: Props) => {
  const [state, setState] = useState<ICartContext>(initialState);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export { AppContext, StateProvider, useCart };
