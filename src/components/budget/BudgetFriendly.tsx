import { useEffect } from "react";
import { AppDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { getBudgetFriendlyRecipes, getChickenRecipes } from "../../features/fetchRecipes/recipeSlice";
import { FiCommand } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import trending from "../../components/trending/trending.module.css";
import yum from "../../components/yum.module.css";


const BudgetFriendly = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { budgetFriendlyRecipes, loading } = useAppSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(
      getBudgetFriendlyRecipes({
        number: 20,
        includeNutrition: true,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filterBudgetFriendlyRecipes = budgetFriendlyRecipes?.find((recipe) =>{
     return (recipe?.pricePerServing ?? 0) <= 100
  }
  );

  return (
    <>
      <div className={trending.trending_container}>
        {loading ? (
          <div className={trending.icon}>
            <FiCommand className={trending.loading_icon} />
          </div>
        ) : (
          <div className={yum.yum_images_container}>
            <div>
              <Fade
                triggerOnce={true}
                cascade={false}
                direction="up"
                // delay={index * 100}
              >
                <Link to={`/budget`} className={trending.trending_images_link}>
                  <div
                    key={filterBudgetFriendlyRecipes?.id}
                    className={trending.trending_images}
                  >
                    <img
                      key={filterBudgetFriendlyRecipes?.id}
                      className={trending.trending_image}
                      src={filterBudgetFriendlyRecipes?.image}
                    />
                    <h3
                      onClick={() =>
                        dispatch(
                          getChickenRecipes({
                            number: 200,
                            includeNutrition: true,
                          })
                        )
                      }
                    >
                      Budget Friendly Recipes
                    </h3>
                  </div>
                </Link>
              </Fade>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BudgetFriendly;
