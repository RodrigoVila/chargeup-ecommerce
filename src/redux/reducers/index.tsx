import { ADD_ARTICLE, REMOVE_ARTICLE } from "../actionTypes";

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "Brownie de avocado y fresa",
      description:
        "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
      price: 3,
      imgUri: "brownies.jpg",
      suitableForInfo: ["Vegano", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carb: 3,
        fat: 7,
      },
    },
    {
      id: 2,
      title: "Brownie de avocado y fresa",
      description:
        "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
      price: 3,
      imgUri: "brownies.jpg",
      suitableForInfo: ["Vegano", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carb: 3,
        fat: 7,
      },
    },
    {
      id: 3,
      title: "Brownie de avocado y fresa",
      description:
        "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
      price: 3,
      imgUri: "brownies.jpg",
      suitableForInfo: ["Vegano", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carb: 3,
        fat: 7,
      },
    },
    {
      id: 4,
      title: "Brownie de avocado y fresa",
      description:
        "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
      price: 3,
      imgUri: "brownies.jpg",
      suitableForInfo: ["Vegano", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carb: 3,
        fat: 7,
      },
    },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(), // not really unique
        title: action.article.title,
        description: action.article.description,
        price: action.article.price,
        imgUri: action.article.imgUri,
        suitableForInfo: action.article.suitableForInfo,
        nutritionalInfo: action.article.nutritionalInfo,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};

export default reducer;
