import { useState, useContext } from "react";
import { useCart } from "@context/cart/cart-context";

import Image from "next/image";
import Button from "@atoms/Button";
import Counter from "@atoms/Counter";
import RoundImage from "@atoms/RoundImage";

interface Props {
  key?: number;
  title: string;
  description: string;
  nutritionalInfo: string;
  suitableForInfo: string[];
  price: any;
  imgUri: string;
}

const Product = ({
  title,
  description,
  nutritionalInfo,
  suitableForInfo,
  price,
  imgUri,
}: Props) => {
  const [count, setCount] = useState(0);

  // const { cart } = useCart();

  const addOne = () => setCount((prevCount) => prevCount + 1);

  const subtractOne = () => {
    if (count < 1) return 0;
    setCount((prevCount) => prevCount - 1);
  };

  const addToCart = () => {
    localStorage.setItem("cartItems", JSON.stringify([...cart]));
  };
  const total = count * price;

  return (
    <div className="relative w-full m-2 ">
      <div className="relative px-2 h-screen/4">
        <RoundImage imgUri={imgUri} />
      </div>
      <div className="bg-black h-screen/4" />
      <div className="p-4 text-sm text-white bg-black">
        <div className="mb-4 text-base font-semibold">
          {title.toUpperCase()}
        </div>
        <div className="text-sm">{description}</div>
        <div className="flex flex-col my-4">
          <div>Info nutricional:</div>
          <div className="text-sm ">{nutritionalInfo}</div>
        </div>
        <div className="text-sm font-semibold">
          {suitableForInfo.map((info, index) => (
            <>
              {index !== 0 && " | "}
              {info}
            </>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="my-2 text-2xl font-semibold">{`€${price}`}</div>
        </div>

        <div className="flex items-center justify-center">
          <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
          <Button title="Agregar al carro" color="green" onClick={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default Product;
