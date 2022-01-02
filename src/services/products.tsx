import axios from "axios";

const API_URL = "/api/products/";

export const addProductToDB = (article: ProductType): void => {
  axios.post(API_URL, article);
};

export const removeProductFromDB = (articleId: number): void => {
  const config = {
    data: {
      id: articleId,
    },
  };
  axios.delete(API_URL, config);
};

export const getProductList = async () => {
  const { data } = await axios.get(API_URL);

  return data;
};
