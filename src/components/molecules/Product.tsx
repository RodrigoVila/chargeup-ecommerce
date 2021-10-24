import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import Button from "@atoms/Button";
import Counter from "@atoms/Counter";
import RoundImage from "@atoms/RoundImage";
import { addToCart } from "@redux/cart/actions";

const Product = ({
  id,
  title,
  description,
  nutritionalInfo,
  suitableForInfo,
  price,
  imgUri,
}: ArticleType) => {
  const [count, setCount] = useState(0);
  const dispatch: Dispatch<any> = useDispatch();

  const addOne = () => setCount((prevCount) => prevCount + 1);

  const subtractOne = () => {
    if (count < 1) return 0;
    setCount((prevCount) => prevCount - 1);
  };

  const addItemToCart = () => {
    const item: ArticleType = {
      id,
      title,
      description,
      nutritionalInfo,
      suitableForInfo,
      price,
      imgUri,
      quantity: count
    };
    
    dispatch(addToCart(item));
  };

  return (
    <div className="relative w-full max-w-xs mx-2 mt-32 mb-4 lg:max-w-360 lg:mx-8">
      <div className="p-8 text-white bg-black rounded-xl">
        <RoundImage imgUri={imgUri} />
        <div className="mb-4 text-base font-semibold md:text-xl">
          {title.toUpperCase()}
        </div>
        <div className="text-sm md:text-lg">{description}</div>
        <div className="flex flex-col my-4 text-sm md:text-base">
          <div>Info nutricional:</div>
          <div className="text-sm md:text-lg ">{`Cal: ${nutritionalInfo.calories} | Car: ${nutritionalInfo.carbs} | Fat: ${nutritionalInfo.fat} | Prot: ${nutritionalInfo.protein}`}</div>
        </div>
        <div className="text-sm font-semibold md:text-base">
          {suitableForInfo.map((info, index) => (
            <>
              {index !== 0 && " | "}
              {info}
            </>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="my-2 text-2xl font-semibold md:text-4xl">{`€${price}`}</div>
        </div>

        <div className="flex items-center justify-center">
          <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
          <Button
            title="Agregar al carro"
            color="purple2"
            onClick={addItemToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
