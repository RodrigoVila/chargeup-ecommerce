import { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from "./actionTypes";

export const addArticle = (article: ArticleType) => ({
  type: ADD_ARTICLE,
  payload: article,
});

export const removeArticle = (article: ArticleType) => ({
  type: DELETE_ARTICLE,
  payload: article,
});
