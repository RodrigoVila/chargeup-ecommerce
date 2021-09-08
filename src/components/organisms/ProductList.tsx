import { useState, useEffect } from "react";
import axios from "axios";

import Product from "@molecules/Product";

interface IProduct {
  title: string;
  description: string;
  price: number;
  imgUri: string;
}

const ProductList = () => {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetch = async () => {
    setLoading(true);
    await axios
      .get("/api/product")
      .then((res) => setProducts(res.data))
      .catch((e) => console.error("Error obteniendo productos", e));

    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex flex-wrap w-full ">
      {isLoading
        ? "Loading ..."
        : products?.map((product: IProduct, index) => (
            <Product
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              imgUri={product.imgUri}
            />
          ))}
    </div>
  );
};

export default ProductList;