import { useEffect } from "react";
import { AppDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import {
  getChickenRecipes,
  getUnder45MinRecipes,
} from "../../features/fetchRecipes/recipeSlice";
import { FiCommand } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import trending from "../../components/trending/trending.module.css";
import yum from "../../components/yum.module.css";

const Under45Min = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { under45MinRecipes, loading } = useAppSelector(
    (state) => state.recipe
  );

  useEffect(() => {
    dispatch(
      getUnder45MinRecipes({
        number: 20,
        includeNutrition: true,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filter45MinRecipes = under45MinRecipes?.find((recipe) => {
    return (recipe?.readyInMinutes ?? 0) <= 45;
  });
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
                <Link to={`/under45`} className={trending.trending_images_link}>
                  <div
                    key={filter45MinRecipes?.id}
                    className={trending.trending_images}
                  >
                    <img
                      key={filter45MinRecipes?.id}
                      className={trending.trending_image}
                      src={filter45MinRecipes?.image}
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
                      Under 45 Min or Less?
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

export default Under45Min;
