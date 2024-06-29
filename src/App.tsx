import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navlayout from "./layout/Navlayout";
import Trending from "./pages/trending/Trending";
import GetSingleRecipe from "./pages/recipes/GetSingleRecipe";
import NotFound from "./pages/NotFound";
import Home from "./pages/home/Home";
import Popular from "./pages/popular/Popular";
import ChickenInfusionRecipes from "./pages/chicken/ChickenInfusionRecipes";
import BudgetFriendly from "./pages/budget/BudgetFriendly";
import Under45Min from "./pages/under45Min/Under45MinRecipes";
import SearchRecipeDisplay from "./pages/search/SearchRecipeDisplay";
// import RecipeLayout from "./layout/RecipeLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navlayout title="Tren" recipes={[]} />} errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route path="trending" element={<Trending />} />
        <Route path="/trending/:id" element={<GetSingleRecipe />} />
        <Route path="popular" element={<Popular />} />
        <Route path="/popular/:id" element={<GetSingleRecipe />} />
        <Route path="/chicken" element={<ChickenInfusionRecipes />} />
        <Route path="/chicken/:id" element={<GetSingleRecipe />} />
        <Route path="/budget" element={<BudgetFriendly />} />
        <Route path="/budget/:id" element={<GetSingleRecipe />} />
        <Route path="/under45" element={<Under45Min />} />
        <Route path="/under45/:id" element={<GetSingleRecipe />} />
         <Route path="/search" element={<SearchRecipeDisplay />} />
        <Route path="/not-found" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
