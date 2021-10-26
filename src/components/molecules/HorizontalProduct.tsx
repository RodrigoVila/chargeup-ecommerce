import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { addToCart } from "@redux/cart/actions";
import {
  displayErrorMessage,
  displaySuccessMessage,
  displayInfoMessage,
} from "@redux/toast notifications/actions";
import useWindowsDimensions from "@hooks/useWindowsDimensions.tsx";
import ProductCountAndPrices from "./ProductCountAndPrices";
import RoundImage from "@atoms/RoundImage";
import BackgroundOverlay from "@atoms/BackgroundOverlay";

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
  const width = useWindowsDimensions();

  const addItemToCart = () => {
    if (count === 0) {
      dispatch(displayInfoMessage("Cantidad tiene que ser mayor a 0."));
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
    dispatch(displaySuccessMessage("Producto agregado"));
  };

  const getProductImg = () => {
    switch (id) {
      case 1:
        return "bg-brownies";
      case 2:
        return "bg-driedfruits";
      case 3:
        return "bg-bolitas";
      default:
        "";
    }
  };

  const addOne = () => setCount((prevCount) => prevCount + 1);

  const subtractOne = () => {
    if (count < 1) return 0;
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex w-full max-w-6xl pr-2 my-8 text-white bg-tranlucentBlack2 lg:max-w-3xl rounded-xl max-h-64">
      <RoundImage imgUri={imgUri} />
      <div className="flex-col pr-8 -ml-10 ">
        <div className="my-4 text-base font-semibold md:text-xl">
          {title.toUpperCase()}
        </div>
        <div className="text-sm md:text-lg">{description}</div>
        <div className="flex flex-col my-4 text-sm md:text-base">
          <div>Info nutricional:</div>
          <div className="text-sm md:text-base ">{`Cal: ${nutritionalInfo.calories} | Car: ${nutritionalInfo.carbs} | Fat: ${nutritionalInfo.fat} | Prot: ${nutritionalInfo.protein}`}</div>
        </div>
        <div className="flex items-center justify-between text-sm font-semibold md:text-base">
          {suitableForInfo.map((info, index) => (
            <>
              {index !== 0 && " | "}
              {info}
            </>
          ))}
          <div className="relative">
            <ProductCountAndPrices
              count={count}
              singlePrice={price}
              addOne={addOne}
              subtractOne={subtractOne}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProduct;
