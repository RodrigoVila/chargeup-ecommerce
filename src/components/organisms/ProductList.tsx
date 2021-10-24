import { FC, useState, useEffect } from "react";
import axios from "axios";

import Product from "@molecules/Product";
import { shallowEqual, useSelector } from "react-redux";

const ProductList: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const articles: ArticleType[] = useSelector(
    (state: StateType[]) => state.articles.items,
    shallowEqual
  );

 const fetch = async () => {
    setLoading(true);
    await axios
      .get("/api/product")
      .then((res) => setProducts(res.data))
      .catch((e) => console.error("Error obteniendo productos", e));

    setLoading(false);
  };

  // useEffect(() => {
  //   fetch();
  // }, []);

  return (
    <div className="flex flex-wrap justify-center w-full mx-auto ">
      {isLoading
        ? "Loading ..."
        : articles?.map((p, index) => (
            <Product
              key={index}
              id={p.id}
              title={p.title}
              description={p.description}
              nutritionalInfo={p.nutritionalInfo}
              suitableForInfo={p.suitableForInfo}
              price={p.price}
              imgUri={p.imgUri}
            />
          ))}
    </div>
  );
};

export default ProductList;
