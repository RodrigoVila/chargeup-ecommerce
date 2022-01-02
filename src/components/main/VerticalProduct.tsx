import { useState } from "react";
import Button from "@main/Button";
import Counter from "@main/Counter";
import RoundImage from "@main/RoundImage";
import { addToCart } from "@redux/actions/cart";
import {
  displayErrorMessage,
  displaySuccessMessage,
  displayInfoMessage,
} from "@redux/actions/toast_notifications";
import { colors } from "@utils/constants";
import { useAppDispatch } from "@hooks";

const VerticalProduct = ({
  id,
  title,
  description,
  nutritionalInfo,
  suitableForInfo,
  price,
  imgUri,
}: ProductType) => {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  const addOne = () => setCount((prevCount) => prevCount + 1);

  const subtractOne = () => {
    if (count < 1) return 0;
    setCount((prevCount) => prevCount - 1);
  };

  const addItemToCart = () => {
    if (count === 0) {
      dispatch(displayInfoMessage("Cantidad tiene que ser mayor a 0"));
      return;
    }
    const item: ProductType = {
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
    dispatch(displaySuccessMessage("Producto agregado!"));
  };

  return (
    <div className="relative w-full max-w-xs mx-2 mt-32 mb-4 text-white bg-black lg:max-w-360 lg:mx-8 rounded-xl">
      <div className="px-8 pt-8 pb-4 ">
        <RoundImage isVertical imgUri={imgUri} />
        <div className="mb-4 text-base font-semibold md:text-xl">
          {title.toUpperCase()}
        </div>
        <div className="text-sm md:text-lg">{description}</div>
        <div className="flex flex-col my-4 text-sm md:text-base">
          <div>Info nutricional:</div>
          <div className="text-sm md:text-lg ">{`Cal: ${nutritionalInfo.calories} | Car: ${nutritionalInfo.carbs} | Fat: ${nutritionalInfo.fat} | Prot: ${nutritionalInfo.protein}`}</div>
        </div>
        <div className="flex text-sm font-semibold md:text-base">
          {suitableForInfo.map((info, index) => (
            <React.Fragment key={index}>
              {index !== 0 && " | "}
              {info}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="my-2 text-2xl font-semibold md:text-4xl">{`€${price}`}</div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-4 mb-4">
        <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
        <Button title="Agregar" color={colors.purple} onClick={addItemToCart} />
      </div>
    </div>
  );
};

export default VerticalProduct;
