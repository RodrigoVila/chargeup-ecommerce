import React from "react";
import { RiCloseFill } from "react-icons/ri";
import HorizontalProduct from "./HorizontalProduct";

interface Props {
  isOpen: boolean;
  items: ArticleType[];
  toggleCart: () => void;
}

const CartMenu = ({ isOpen, items, toggleCart }: Props) => {
  return (
    <div
      className={`${
        !isOpen && "hidden"
      } z-30 left-0 absolute h-screen top-0 flex items-center justify-center w-full pt-16 bg-center bg-no-repeat bg-cover bg-wooden overflow-y-auto`}
    >
      <div className="flex flex-col items-center w-full h-full">
        <div className="absolute top-0 right-0 z-20 m-2" onClick={toggleCart}>
          <RiCloseFill color="white" size={45} />
        </div>

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
          // <div>{`${item.title} - ${item.quantity}u x $${item.price} = Total $${
          //   item.price * item.quantity
          // }`}</div>
        ))}
      </div>
    </div>
  );
};

export default CartMenu;
