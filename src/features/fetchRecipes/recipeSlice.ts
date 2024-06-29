import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  RecipeList,
  SimilarRecipeResponse,
  SingleRecipeResponse,
} from "../../interfaces/interfaces";
import { ApiResponse } from "../../interfaces/interfaces";

const apiKey = import.meta.env.VITE_REACT_APP_RECIPES_API_KEY;

export const getRandomRecipe = createAsyncThunk(
  "recipe/getRandomRecipe",
  async (): Promise<RecipeList[]> => {
    const response = await axios.get<ApiResponse>(
      // "https://localhost:3000/recipes/random"
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
    );
    const recipe = response.data.recipes;
    return recipe;
  }
);

export const getTrendingRecipes = createAsyncThunk(
  "recipe/fetchRecipes",
  async (params: {
    includeNutrition?: boolean;
    includeTags?: string;
    excludeTags?: string;
    number?: number;
  }): Promise<RecipeList[]> => {
    const { includeNutrition, includeTags, excludeTags, number } = params;
    const queryParams = new URLSearchParams();
    queryParams.append("apiKey", apiKey);

    if (includeNutrition) {
      queryParams.append("includeNutrition", "true");
    }

    if (includeTags) {
      queryParams.append("include-tags", includeTags);
    }

    if (excludeTags) {
      queryParams.append("exclude-tags", excludeTags);
    }

    if (number) {
      queryParams.append("number", number.toString());
    }

    const response = await axios.get<ApiResponse>(
      // `https://localhost:3000/recipes/random?number=${number}&include-tags=${includeTags}&includeNution=${includeNutrition}`
      `https://api.spoonacular.com/recipes/random?${queryParams.toString()}`
    );

    const rep = response.data.recipes;
    return rep;
  }
);

export const getPopularRecipes = createAsyncThunk(
  "recipe/fetchPopularRecipes",
  async (params: {
    includeNutrition?: boolean;
    includeTags?: string;
    excludeTags?: string;
    number?: number;
  }): Promise<RecipeList[]> => {
    const { includeNutrition, includeTags, excludeTags, number } = params;
    const queryParams = new URLSearchParams();
    queryParams.append("apiKey", apiKey);

    if (includeNutrition) {
      queryParams.append("includeNutrition", "true");
    }

    if (includeTags) {
      queryParams.append("include-tags", includeTags);
    }

    if (excludeTags) {
      queryParams.append("exclude-tags", excludeTags);
    }

    if (number) {
      queryParams.append("number", number.toString());
    }

    const response = await axios.get<ApiResponse>(
      // `https://localhost:3000/recipes/random?number=${number}&include-tags=${includeTags}&includeNution=${includeNutrition}`
      `https://api.spoonacular.com/recipes/random?${queryParams.toString()}`
    );

    const rep = response.data.recipes;
    return rep;
  }
);

export const getChickenRecipes = createAsyncThunk(
  "recipe/fetchChickenRecipes",
  async (params: {
    includeNutrition?: boolean;
    includeTags?: string;
    excludeTags?: string;
    number?: number;
  }): Promise<RecipeList[]> => {
    const { includeNutrition, includeTags, excludeTags, number } = params;
    const queryParams = new URLSearchParams();
    queryParams.append("apiKey", apiKey);

    if (includeNutrition) {
      queryParams.append("includeNutrition", "true");
    }

    if (includeTags) {
      queryParams.append("include-tags", includeTags);
    }

    if (excludeTags) {
      queryParams.append("exclude-tags", excludeTags);
    }

    if (number) {
      queryParams.append("number", number.toString());
    }

    const response = await axios.get<ApiResponse>(
      // `https://localhost:3000/recipes/random?number=${number}&include-tags=${includeTags}&includeNution=${includeNutrition}`
      `https://api.spoonacular.com/recipes/random?${queryParams.toString()}`
    );

    const rep = response.data.recipes;
    return rep;
  }
);
export const getBudgetFriendlyRecipes = createAsyncThunk(
  "recipe/fetchBudgetFriendlyRecipes",
  async (params: {
    includeNutrition?: boolean;
    includeTags?: string;
    excludeTags?: string;
    number?: number;
  }): Promise<RecipeList[]> => {
    const { includeNutrition, includeTags, excludeTags, number } = params;
    const queryParams = new URLSearchParams();
    queryParams.append("apiKey", apiKey);

    if (includeNutrition) {
      queryParams.append("includeNutrition", "true");
    }

    if (includeTags) {
      queryParams.append("include-tags", includeTags);
    }

    if (excludeTags) {
      queryParams.append("exclude-tags", excludeTags);
    }

    if (number) {
      queryParams.append("number", number.toString());
    }

    const response = await axios.get<ApiResponse>(
      // `https://localhost:3000/recipes/random?number=${number}&include-tags=${includeTags}&includeNution=${includeNutrition}`
      `https://api.spoonacular.com/recipes/random?${queryParams.toString()}`
    );

    const rep = response.data.recipes;
    return rep;
  }
);
export const getUnder45MinRecipes = createAsyncThunk(
  "recipe/fetchUnder45MinRecipes",
  async (params: {
    includeNutrition?: boolean;
    includeTags?: string;
    excludeTags?: string;
    number?: number;
  }): Promise<RecipeList[]> => {
    const { includeNutrition, includeTags, excludeTags, number } = params;
    const queryParams = new URLSearchParams();
    queryParams.append("apiKey", apiKey);

    if (includeNutrition) {
      queryParams.append("includeNutrition", "true");
    }

    if (includeTags) {
      queryParams.append("include-tags", includeTags);
    }

    if (excludeTags) {
      queryParams.append("exclude-tags", excludeTags);
    }

    if (number) {
      queryParams.append("number", number.toString());
    }

    const response = await axios.get<ApiResponse>(
      // `https://localhost:3000/recipes/random?number=${number}&include-tags=${includeTags}&includeNution=${includeNutrition}`
      `https://api.spoonacular.com/recipes/random?${queryParams.toString()}`
    );

    const rep = response.data.recipes;
    return rep;
  }
);
export const getSingleRecipe = createAsyncThunk(
  "recipe/getSingleRecipe",
  async (params: {
    id: number;
    includeNutrition?: boolean;
    addWinePairing?: boolean;
    addTasteData?: boolean;
  }): Promise<SingleRecipeResponse> => {
    const { includeNutrition, addWinePairing, addTasteData, id } = params;
    const queryParams = new URLSearchParams();
    queryParams.append("apiKey", apiKey);
    const response = await axios.get<SingleRecipeResponse>(
      // `https://localhost:3000/recipes/${id}/information?includeNutrition=${includeNutrition}&addWineParing=${addWinePairing}&addTasteData=${addTasteData}`
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=${includeNutrition}&addWineParing=${addWinePairing}&addTasteData=${addTasteData}`
    );
    const rep = response.data;
    return rep;
  }
);
export const getSimilarRecipes = createAsyncThunk(
  "recipe/getSimilarRecipes ",
  async (params: { id: number; number?: number; limitLicense?: boolean }) => {
    const { id, number, limitLicense } = params;
    // const queryParams = new URLSearchParams();
    const response = await axios.get<SimilarRecipeResponse[]>(
      // `https://localhost:3000/recipes/${id}/similar?number=${number}&limitLicense=${limitLicense}`
      `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`
    );
    return response.data;
  }
);
export interface RecipeState {
  loading: boolean;
  randomRecipe: RecipeList | null;
  trendingRecipes: RecipeList[];
  popularRecipes: RecipeList[];
  singleRecipe: SingleRecipeResponse | null;
  SimilarRecipe: SimilarRecipeResponse[];
  chickenInfusion: RecipeList[];
  under45MinRecipes: RecipeList[];
  budgetFriendlyRecipes: RecipeList[];
}

const initialState: RecipeState = {
  loading: false,
  randomRecipe: null,
  trendingRecipes: [],
  popularRecipes: [],
  singleRecipe: null,
  SimilarRecipe: [],
  chickenInfusion: [],
  under45MinRecipes: [],
  budgetFriendlyRecipes: [],
};
const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomRecipe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRandomRecipe.fulfilled, (state, action) => {
      state.randomRecipe = action.payload[0];
      state.loading = false;
    });
    builder.addCase(getRandomRecipe.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getTrendingRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrendingRecipes.fulfilled, (state, action) => {
      state.trendingRecipes = action.payload;
      state.loading = false;
    });
    builder.addCase(getTrendingRecipes.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getPopularRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPopularRecipes.fulfilled, (state, action) => {
      state.popularRecipes = action.payload;
      state.loading = false;
    });
    builder.addCase(getPopularRecipes.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getChickenRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getChickenRecipes.fulfilled, (state, action) => {
      state.chickenInfusion = action.payload;
      state.loading = false;
    });
    builder.addCase(getChickenRecipes.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getBudgetFriendlyRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBudgetFriendlyRecipes.fulfilled, (state, action) => {
      state.budgetFriendlyRecipes = action.payload;
      state.loading = false;
    });
    builder.addCase(getBudgetFriendlyRecipes.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getUnder45MinRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUnder45MinRecipes.fulfilled, (state, action) => {
      state.under45MinRecipes = action.payload;
      state.loading = false;
    });
    builder.addCase(getUnder45MinRecipes.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getSingleRecipe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSingleRecipe.fulfilled, (state, action) => {
      state.singleRecipe = action.payload;
      state.loading = false;
    });
    builder.addCase(getSingleRecipe.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getSimilarRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSimilarRecipes.fulfilled, (state, action) => {
      state.SimilarRecipe = action.payload;
      state.loading = false;

    });
    builder.addCase(getSimilarRecipes.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default recipeSlice.reducer;
