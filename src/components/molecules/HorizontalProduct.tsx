import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { addToCart, removeFromCart } from "@redux/cart/actions";
import {
  displayErrorMessage,
  displaySuccessMessage,
  displayInfoMessage,
} from "@redux/toast notifications/actions";
import useWindowsDimensions from "@hooks/useWindowsDimensions.tsx";
import ProductCountAndPrices from "./ProductCountAndPrices";
import RoundImage from "@atoms/RoundImage";
import BackgroundOverlay from "@atoms/BackgroundOverlay";
import Counter from "@atoms/Counter";
import { RiCloseFill } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin2Line } from "react-icons/ri";

const HorizontalProduct = ({
  id,
  title,
  description,
  nutritionalInfo,
  suitableForInfo,
  price,
  imgUri,
}: ArticleType) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [count, setCount] = useState(0);

  const addOne = () => setCount((prevCount) => prevCount + 1);

  const subtractOne = () => {
    if (count < 1) return 0;
    setCount((prevCount) => prevCount - 1);
  };

  const removeItem = () => {
    //TODO: FIX Type
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex w-full max-w-6xl pr-2 my-8 text-white bg-tranlucentBlack2 lg:max-w-3xl rounded-xl max-h-64">
      <RoundImage imgUri={imgUri} />
      <div className="relative flex-col pr-8 -ml-10">
        <div
          className="absolute right-0 z-20 flex flex-row m-1 cursor-pointer top-1"
          onClick={removeItem}
        >
          <GiCancel color="red" size={22} />
        </div>
        <div className="my-4 text-base font-semibold md:text-xl">
          {title.toUpperCase()}
        </div>
        <div className="text-sm md:text-lg">{description}</div>
        <div className="flex w-full my-4 text-sm md:text-base">
          <div className="flex-col w-1/2">
            <div>Info nutricional:</div>
            <div className="text-sm md:text-base ">{`Cal: ${nutritionalInfo.calories} | Car: ${nutritionalInfo.carbs} | Fat: ${nutritionalInfo.fat} | Prot: ${nutritionalInfo.protein}`}</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm font-semibold md:text-base">
          {suitableForInfo.map((info, index) => (
            <>
              {index !== 0 && " | "}
              {info}
            </>
          ))}
          <div className="relative flex -mr-4">
            <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
            <div className="h-full ml-4 md:text-3xl">{`€${count * price}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProduct;
