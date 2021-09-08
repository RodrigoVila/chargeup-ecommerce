import { useState, useContext } from "react";
import { useCart } from "@context/cart/cart-context";

import Image from "next/image";
import Button from "@atoms/Button";
import Counter from "@atoms/Counter";

interface Props {
  key?: number;
  title: string;
  description: string;
  price: any;
  imgUri: string;
}

const Product = ({ title, description, price, imgUri }: Props) => {
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
    <div className="m-2 bg-white border border-fuchsia-700 w-60">
      <div className="h-40">
        {imgUri ? (
          <Image
            src={imgUri}
            alt="Picture of the author"
            width={250}
            height={160}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-300">
            Imagen
          </div>
        )}
      </div>

      <div className="mx-2">{title}</div>
      <div className="mx-2 text-sm">{description}</div>
      <div className="flex">
        <div className="mx-2">Precio</div>
        <div className="font-semibold text-green-400">{price}</div>
      </div>

      <div className="flex items-center justify-between m-2 ">
        <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
        <div className="flex-col text-center">
          {count > 0 ? <div>Total</div> : null}
          {count > 0 ? total.toFixed(2) : null}
        </div>
      </div>
      <Button title="Agregar al carro" color="green" onClick={addToCart} />
    </div>
  );
};

export default Product;
