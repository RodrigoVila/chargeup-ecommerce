import axios from "axios";

const API_URL = "/api/product/";

export const addProductToDB = (article: ArticleType): void => {
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

