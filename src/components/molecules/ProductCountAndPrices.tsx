import React, { useMemo, useState } from "react";
import Counter from "@atoms/Counter";

interface Props {
  count: number;
  singlePrice: number;
  addOne: () => void;
  subtractOne: () => void;
}

const ProductCountAndPrices = ({
  singlePrice,
  count,
  addOne,
  subtractOne,
}: Props) => {
  const totalPrice = useMemo(() => singlePrice * count, [count]);

  return (
    <div className="flex items-center justify-start text-xl font-semibold">
      <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
      <div className="h-full md:text-2xl">{`€${singlePrice}`}</div>
    </div>
  );
};

export default ProductCountAndPrices;
