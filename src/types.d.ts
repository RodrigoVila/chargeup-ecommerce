interface INutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

//Article
type ArticleType = {
  id: number;
  title: string;
  description: string;
  nutritionalInfo: INutritionalInfo;
  suitableForInfo: string[];
  price: number;
  imgUri: string;
  quantity?: number;
};

type ArticleStateType = {
  articles: ArticleType[];
};

type ArticleActionType = {
  type: string;
  article: ArticleType;
};

//Cart
type CartStateType = {
  cart: ArticleType[];
};

type CartActionType = {
  type: string;
  cart: ArticleType[];
};

//Toast
type ToastStateType = {
  message: string;
};

type ToastActionType = {
  type: string;
  message: string;
};

type StateType = {
  state: {
    articles: ArticleType[];
    cart: ArticleType[];
    message?: "";
  };
};

type DispatchType = (args: ArticleActionType) => ArticleActionType;
type DispatchType = (args: CartAction) => CartAction;
