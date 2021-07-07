import { useState, createContext, ReactNode, useContext } from "react";

interface ICartContext {
  cart: string[];
}

interface IModalContext {
  component: any;
  props: any;
  showModal: () => void;
  hideModal: () => void;
}

interface Props {
  children: ReactNode;
}

const cartInitialState: ICartContext = {
  cart: [],
};

const modalInitialState: IModalContext = {
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {},
};

const CartContext = createContext<ICartContext>(cartInitialState);

const ModalContext = createContext<IModalContext>(modalInitialState);

const useCart = () => {
  return useContext(CartContext);
};

const useModal = () => {
  return useContext(ModalContext);
};

const StateProvider = ({ children }: Props) => {
  const [cart, setCart] = useState(cartInitialState);
  const [modal, setModal] = useState(modalInitialState);

  const showModal = (component, props = {}) => {
    setModal({ component, props });
  };

  const hideModal = () => {

    setModal({component})
  };

  return (
    <CartContext.Provider value={cart}>
      <ModalContext.Provider value={isModalShown}>
        {children}
      </ModalContext.Provider>
    </CartContext.Provider>
  );
};

export { CartContext, ModalContext, StateProvider, useCart, useModal };
