interface INutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

type ArticleType = {
  id: number;
  title: string;
  description: string;
  nutritionalInfo: INutritionalInfo;
  suitableForInfo: string[];
  price: number;
  imgUri: string;
  quantity?: number
};

// type CartItemType = {
//   id: number;
//   title: string;
//   price: number;
//   imgUri: string;
// };

type CartStateType = {
  cart: ArticleType[];
};
type ArticleStateType = {
  articles: ArticleType[];
};

type StateType = {
state: {  
  articles: ArticleType[];
  cart: ArticleType[];}
};

type ArticleActionType = {
  type: string;
  article: ArticleType;
};

type CartActionType = {
  type: string;
  cart: ArticleType[];
};

type DispatchType = (args: ArticleActionType) => ArticleActionType;
type DispatchType = (args: CartAction) => CartAction;
