import { ADD_ARTICLE, DELETE_ARTICLE } from "../actions/types";

const initialState: ArticleStateType = {
  articles: [
    {
      id: 1,
      title: "Brownie de avocado y fresa",
      description:
        "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
      price: 3,
      imgUri: "brownies.jpg",
      suitableForInfo: ["Vegan", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carbs: 3,
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
      suitableForInfo: ["Vegan", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carbs: 3,
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
      suitableForInfo: ["Vegan", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carbs: 3,
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
      suitableForInfo: ["Vegan", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carbs: 3,
        fat: 7,
      },
    },
    {
      id: 5,
      title: "Brownie de avocado y fresa",
      description:
        "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
      price: 3,
      imgUri: "brownies.jpg",
      suitableForInfo: ["Vegan", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carbs: 3,
        fat: 7,
      },
    },
    {
      id: 6,
      title: "Brownie de avocado y fresa",
      description:
        "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
      price: 3,
      imgUri: "brownies.jpg",
      suitableForInfo: ["Vegan", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carbs: 3,
        fat: 7,
      },
    },
    {
      id: 7,
      title: "Brownie de avocado y fresa",
      description:
        "Mousse de avocado con harina de coco y huevos chia, se utiliza cacao 80%.",
      price: 3,
      imgUri: "brownies.jpg",
      suitableForInfo: ["Vegan", "Keto", "Gluten Free"],
      nutritionalInfo: {
        calories: 102,
        protein: 11,
        carbs: 3,
        fat: 7,
      },
    },
  ],
};

const articleReducer = (
  state: ArticleStateType = initialState,
  action: ArticleActionType
): ArticleStateType => {
  switch (action.type) {
    case ADD_ARTICLE:
      const newArticle: ArticleType = {
        id: action.article.id,
        title: action.article.title,
        description: action.article.description,
        price: action.article.price,
        imgUri: action.article.imgUri,
        suitableForInfo: action.article.suitableForInfo,
        nutritionalInfo: action.article.nutritionalInfo,
      };
      return {
        ...state,
        articles: [...state.articles, newArticle],
      };
    case DELETE_ARTICLE:
      const updatedArticles: ArticleType[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};

export default articleReducer;
