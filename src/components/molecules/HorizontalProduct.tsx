import { useState, useCallback } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import Counter from "@atoms/Counter";
import { addToCart } from "@redux/cart/actions";
import {
  displayErrorMessage,
  displaySuccessMessage,
  displayInfoMessage,
} from "@redux/toast notifications/actions";
import useWindowsDimensions from "@hooks/useWindowsDimensions.tsx";

const HorizontalProduct = ({
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

  const width = useWindowsDimensions();

  const addOne = () => setCount((prevCount) => prevCount + 1);

  const subtractOne = () => {
    if (count < 1) return 0;
    setCount((prevCount) => prevCount - 1);
  };

  const addItemToCart = () => {
    if (count === 0) {
      dispatch(displayInfoMessage("Amount to add has to be more than 0."));
      return;
    }
    const item: ArticleType = {
      id,
      title,
      description,
      nutritionalInfo,
      suitableForInfo,
      price,
      imgUri,
      quantity: count,
    };
    dispatch(addToCart(item));
    dispatch(displaySuccessMessage("Item added to cart!"));
  };

  return (
    <div className="relative w-full mt-16 mb-4 bg-red-500">
      {/* <div className="flex flex-row text-white bg-black ">
        <Image
          className=""
          objectFit="cover"
          layout="fill"
          src="/brownies.jpg"
          alt=""
        />
      </div> */}
      <div className="flex-col w-full">
        <div className="mb-4 text-base font-semibold text-center md:text-xl">
          {title.toUpperCase()}
        </div>

        {width > 450 && (
          <>
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
          </>
        )}
      </div>
      <div className="flex items-center justify-start mx-4 text-2xl font-semibold bg-blue-300">
        <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
        <div className="h-full mx-2 md:text-4xl">x</div>
        <div className="h-full md:text-4xl">{`€${price}`}</div>
        <div className="h-full mx-2 md:text-4xl">=</div>
        <div className="h-full text-3xl md:text-4xl">{`€${
          price * count
        }`}</div>
      </div>
    </div>
  );
};

export default HorizontalProduct;
