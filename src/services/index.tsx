import axios from "axios";

export const addProductToDB = (
  title: string,
  description: string,
  price: string,
  imgUri: string
): void => {
  axios.post("/api/products", {
    title,
    description,
    price,
    imgUri,
  });
};
