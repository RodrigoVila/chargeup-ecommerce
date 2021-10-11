interface INutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

type IArticle = {
  id: string;
  title: string;
  description: string;
  nutritionalInfo: INutritionalInfo;
  suitableForInfo: string[];
  price: number;
  imgUri: string;
};

type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
