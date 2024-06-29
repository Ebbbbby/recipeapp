import  { useEffect } from "react";
import { AppDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { getTrendingRecipes } from "../../features/fetchRecipes/recipeSlice";
import trending from './trending.module.css'
import { FiCommand } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const TrendingRecipe = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { trendingRecipes, loading } = useAppSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(
      getTrendingRecipes({
        number: 4,
        includeNutrition: true,
        includeTags: "vegetarian,dessert",
      })
    );
  }, [dispatch]);
  return (
    <>
      <div className={trending.trending_container}>
        {loading ? (
          <div className={trending.icon}>
            <FiCommand className={trending.loading_icon} />
          </div>
        ) : (
          <div className={trending.trending_images_container}>
            {trendingRecipes?.map((image, index) => (
              <div key={image.id}>
                <Fade triggerOnce={true} cascade={false} direction="up" delay={index*100}>
                  <Link
                    to={`/trending/${image?.id}`}
                    className={trending.trending_images_link}
                  >
                    <div key={image.id} className={trending.trending_images}>
                      <img
                        key={image.id}
                        className={trending.trending_image}
                        src={image?.image}
                        alt={`Image ${image.id + 1}`}
                      />
                      <h3>{image.title}</h3>
                    </div>
                  </Link>
                </Fade>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TrendingRecipe;
