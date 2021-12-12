import { postNewOrder } from "@services";
import { ADD_ARTICLE, DELETE_ARTICLE } from "./actionTypes";

const orderReducer = (
  state: OrderStateType = [],
  action: OrderActionType
): OrderStateType => {
  switch (action.type) {
    case ADD_ARTICLE:
      const newOrder: OrderItemType[] = {
        id: action.order.id,
        title: action.order.title,
        price: action.order.price,
        quantity: action.order.quantity,
      };
      return postNewOrder(newOrder)
        .then((data) => console.log("!succeess", data))
        .catch((e) => console.error("!error", e));
    case DELETE_ARTICLE:
      const updatedArticles: ArticleType[] = state.articles.wfilter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};

export default orderReducer;
