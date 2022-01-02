import CartFooter from "@main/CartFooter";
import React from "react";
import { RiCloseFill } from "react-icons/ri";
import HorizontalProduct from "./HorizontalProduct";

interface Props {
  isOpen: boolean;
  items: ProductType[];
  toggleCart: () => void;
}

const CartMenu = ({ isOpen, items, toggleCart }: Props) => {
  const onSubmit = () => {
    console.log("!hola", items);
  };
  return (
    <div
      className={`${
        !isOpen && "hidden"
      } z-30 left-0 absolute h-screen top-0 flex flex-col items-center justify-center w-full pt-16 bg-center bg-no-repeat bg-cover bg-wooden overflow-y-auto`}
    >
      <div
        className="absolute top-0 right-0 z-20 m-2 cursor-pointer"
        onClick={toggleCart}
      >
        <RiCloseFill color="white" size={45} />
      </div>
      <div className="flex flex-col items-center flex-1 w-full">
        {items.map((item) => (
          <HorizontalProduct
            id={item.id}
            title={item.title}
            description={item.description}
            nutritionalInfo={item.nutritionalInfo}
            suitableForInfo={item.suitableForInfo}
            price={item.price}
            imgUri={item.imgUri}
          />
        ))}
      </div>
      <CartFooter onSubmit={onSubmit} />
    </div>
  );
};

export default CartMenu;
