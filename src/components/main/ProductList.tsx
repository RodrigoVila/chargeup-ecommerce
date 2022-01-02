import { FC, useState, useEffect } from "react";
import axios from "axios";

import Product from "@main/VerticalProduct";
import { shallowEqual, useSelector } from "react-redux";

const ProductList: FC = () => {
  const [isLoading, setLoading] = useState(false);

  const products: ProductType[] = useSelector(
    (state: StateType) => state.products,
    shallowEqual
  );

  useEffect(() => {
    console.info("products", products);
  }, [products]);

  // useEffect(() => {
  //   axios
  //     .get("/api/products")
  //     .then((data) => console.log("!data", data))
  //     .catch((e) => console.error("!err", e));
  // }, []);

  return (
    <div className="flex flex-wrap justify-center w-full mx-auto ">
      {isLoading
        ? "Loading ..."
        : "a"
        // : products?.map((p, index) => (
        //     <Product
        //       key={index}
        //       id={p.id}
        //       title={p.title}
        //       description={p.description}
        //       nutritionalInfo={p.nutritionalInfo}
        //       suitableForInfo={p.suitableForInfo}
        //       price={p.price}
        //       imgUri={p.imgUri}
        //     />
        //   ))
          }
    </div>
  );
};

export default ProductList;
