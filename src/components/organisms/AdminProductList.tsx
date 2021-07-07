import { useState, useEffect } from "react";
import axios from "axios";

import AdminProduct from "@molecules/AdminProduct";

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
    <div className="flex flex-col">
      <div className="grid grid-cols-6 gap-4 p-4 text-center text-white shadow text-l bg-gradient-to-r from-blue-900 to-gray-800">
        <div>Name</div>
        <div>Description</div>
        <div>Price</div>
        <div>Image URL</div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
      {isLoading
        ? "Loading ..."
        : products?.map((product: IProduct, index) => (
            <AdminProduct
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
