type Recipe = {
    id: string;
    name: string;
    ingredients: {
      item: string;
      quantity: string;
    }[];
    instructions: string[];
    prep_time: string;
    cook_time: string;
    servings: number;
  };
  
type RecipesData = {
recipes: Recipe[];
};

  export type { Recipe, RecipesData };