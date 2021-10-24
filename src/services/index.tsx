import axios from "axios";

export const addProductToDB = (article: ArticleType): void => {
  axios.post("/api/product", article);
};

export const removeProductFromDB = (articleId: number): void => {
  const config = {
    data: {
      id: articleId,
    },
  };
  axios.delete("/api/product", config);
};
