import { FC, useState, useEffect } from "react";
import axios from "axios";

import Product from "@molecules/Product";

interface IProduct {
  title: string;
  description: string;
  price: number;
  imgUri: string;
}

const productMockup = [
  {
    title: "Brownie de avocado y fresa",
    description:
      "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
    nutritionalInfo: "102 Cal 11gr C 3gr P 7gr F",
    suitableForInfo: ["Vegano", "Keto", "Gluten Free"],
    price: 3,
    imgUri: "brownies.jpg",
  },
  {
    title: "Brownie de avocado y fresa",
    description:
      "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
    nutritionalInfo: "102 Cal 11gr C 3gr P 7gr F",
    suitableForInfo: ["Vegano", "Keto", "Gluten Free"],
    price: 3,
    imgUri: "brownies.jpg",
  },
  {
    title: "Brownie de avocado y fresa",
    description:
      "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
    nutritionalInfo: "102 Cal 11gr C 3gr P 7gr F",
    suitableForInfo: ["Vegano", "Keto", "Gluten Free"],
    price: 3,
    imgUri: "brownies.jpg",
  },
  {
    title: "Brownie de avocado y fresa",
    description:
      "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
    nutritionalInfo: "102 Cal 11gr C 3gr P 7gr F",
    suitableForInfo: ["Vegano", "Keto", "Gluten Free"],
    price: 3,
    imgUri: "brownies.jpg",
  },
];

const ProductList: FC = () => {
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

  // useEffect(() => {
  //   fetch();
  // }, []);

  return (
    <div className="flex flex-wrap justify-center w-full max-w-xs mx-auto md:max-w-sm">
      {isLoading
        ? "Loading ..."
        : productMockup?.map((p, index) => (
            <Product
              key={index}
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
