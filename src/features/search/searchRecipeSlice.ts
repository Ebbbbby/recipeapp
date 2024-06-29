import axios from "axios";
import { SearchRecipeResponse, SearchResultList } from "../../interfaces/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_REACT_APP_RECIPES_API_KEY;

export const fetchComplexRecipes = createAsyncThunk(
  "recipe/fetchComplexRecipes",
  async (params: {
    query?: string;
    cuisine?: string;
    type?: string;
    sort?: string;
    offset?: number;
    number?: number;
  }): Promise<SearchResultList[]> => {
    const { query, cuisine, type, number, sort, offset } = params;
    const response = await axios.get<SearchRecipeResponse>(
      // "https://api.spoonacular.com/recipes/complexSearch",
      "https://localhost:3000/recipes/complexSearch",
      {
        params: {
          query,
          cuisine,
          type,
          number,
          sort,
          offset,
          apiKey: apiKey,
        },
      }
    );

    return response.data.results;
  }
);

export interface FilterState {
  loading: boolean;
  searchRecipes: SearchResultList[];
}
const initialState: FilterState ={
  loading: false,
  searchRecipes:[],
}
 const searchRecipesSlice = createSlice({
  name: "searchRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder.addCase(fetchComplexRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchComplexRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.searchRecipes = action.payload;
    });
    builder.addCase(fetchComplexRecipes.rejected, (state) => {
      state.loading = false;
    });
  }
 })

 export default searchRecipesSlice.reducer;