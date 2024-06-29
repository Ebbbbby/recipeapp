import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./features/fetchRecipes/recipeSlice";
import searchRecipesReducer from "./features/search/searchRecipeSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    recipe: recipesReducer,
    searchRecipes: searchRecipesReducer
  },
});


export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;