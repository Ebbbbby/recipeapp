export interface IimageProps {
  id: number;
  imageUrl: string;
}

export interface ApiResponse {
  recipes: RecipeList[];
}

export interface RecipeList {
  id: number;
  title: string;
  image: string;
  description?: string;
  spoonacularScore?: number;
  pricePerServing?: number;
  readyInMinutes?: number;
}
export interface SingleRecipeResponse {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  pricePerServing: number;
  servings: number;
  sourceUrl: string;
  aggregateLikes: number;
  taste: {
    sweetness: number;
    saltiness: number;
    sourness: number;
    bitterness: number;
    savoriness: number;
    fattiness: number;
    spiciness: number;
  };
  summary: string;
  dishTypes: string[];
  winePairing: {
    pairedWines: [];
    pairingText: string;
    productMatches: [];
  };
  instructions: string;
  analyzedInstructions: [];
  originalId: null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
  extendedIngredients: extendedIngredients[];
}

export interface extendedIngredients {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
}
export interface SimilarRecipeResponse {
  id: number;
  title: string;
  imageType: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
}
export interface SearchParams {
  query?: string;
  cuisine?: string;
  type?: string;
  sort?: string;
  offset?: number;
  number?: number;
}
export interface SearchResultList {
  id: number;
  title: string;
  image: string;
  imageType?: string;
}
export interface SearchRecipeResponse {
  results: SearchResultList[];
}
