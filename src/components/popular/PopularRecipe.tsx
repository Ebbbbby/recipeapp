import { useEffect } from "react";
import { AppDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { getPopularRecipes } from "../../features/fetchRecipes/recipeSlice";
import trending from "../trending/trending.module.css";
import { FiCommand } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const PopularRecipe = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { popularRecipes, loading } = useAppSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(
      getPopularRecipes({
        number: 8,
        includeTags: "vegan",
      })
    );
  }, []);

  const filterPopularRecipes = popularRecipes.filter((recipes) => {
    return recipes?.spoonacularScore ?? 0 > 50;
  });
  return (
    <>
      <div className={trending.trending_container}>
        {loading ? (
          <div className={trending.icon}>
            <FiCommand className={trending.loading_icon} />
          </div>
        ) : (
          <div className={trending.trending_images_container}>
            {filterPopularRecipes?.map((image, index) => (
              <div key={image.id}>
                <Fade
                  triggerOnce={true}
                  cascade={false}
                  direction="up"
                  delay={index * 100}
                >
                  <Link
                    to={`/popular/${image?.id}`}
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

export default PopularRecipe;
