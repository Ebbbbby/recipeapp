import { staticData } from "../../ImageData";
import recipe from "./recipe.module.css";
import { IimageProps } from "../../interfaces/interfaces";
import globalStyles from "../../globalcss/globalStyles.module.css";
// import { BiPauseCircle, BiPlayCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AppDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { getRandomRecipe } from "../../features/fetchRecipes/recipeSlice";
import { Link } from "react-router-dom";
import TrendingRecipe from "../../components/trending/TrendingRecipe";
import { Fade } from "react-awesome-reveal";
import PopularRecipe from "../../components/popular/PopularRecipe";
import ChickenInfusion from "../../components/chicken/ChickenInfusion";
import Under45Min from "../../components/under45/Under45Min";
import BudgetFriendly from "../../components/budget/BudgetFriendly";
import yum from "../../components/yum.module.css"
import { BiPauseCircle, BiPlayCircle } from "react-icons/bi";


const Home = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { randomRecipe } = useAppSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRandomRecipe());
  }, [dispatch]);

  const handleTogglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Fade>
        <section className={recipe.recipe_wrapper}>
          <Fade cascade damping={0.5}>
            {" "}
            <div
              className={`${recipe.hero_container} ${globalStyles.container_lg}`}
            >
              <div className={recipe.hero_image}>
                <Link to={`/trending/${randomRecipe?.id}`}>
                  <Fade>
                    <img
                      key={randomRecipe?.id}
                      className={recipe.random_image}
                      src={randomRecipe?.image}
                    />
                  </Fade>

                  <div className={recipe.image_content}>
                    <Fade direction="down" delay={1}>
                      <h4>{randomRecipe?.title}</h4>
                      <p>
                        Discover the perfect blend of flavors with this
                        delightful dish. Whether you're cooking for family,
                        friends, or just yourself, this recipe is sure to
                        impress. Ready in no time, it's a simple yet scrumptious
                        addition to your culinary repertoire. Give it a try and
                        enjoy every bite!
                      </p>
                    </Fade>
                  </div>
                </Link>
              </div>

              <div className={recipe.hero_sliders}>
                {staticData?.map((item: IimageProps) => (
                  <img
                    key={item.id}
                    className={`${recipe.slider_image} ${
                      isPlaying ? "running" : "paused"
                    }`}
                    src={item.imageUrl}
                    alt={`Image ${item.id + 1}`}
                  />
                ))}
              </div>
            </div>
          </Fade>

          <div
            className={`${recipe.slider_control_btn} ${globalStyles.container_lg}`}
          >
            <button onClick={handleTogglePlayPause}>
            {isPlaying ? (
              <BiPauseCircle className={recipe.control_btn} />
            ) : (
              <BiPlayCircle className={recipe.control_btn} />
            )}
          </button>
          </div>

          <div
            className={`${recipe.under30_wrapper} ${globalStyles.container_lg}`}
          >
            <div className={recipe.categories} style={{ marginTop: "2rem" }}>
              <Link to="./trending" className={recipe.trending}>
                Trending Recipe <span>&#8594;</span>
              </Link>

              <TrendingRecipe />
            </div>

            <div className={recipe.categories} style={{ marginTop: "2rem" }}>
              <Link to="./popular" className={recipe.trending}>
                Popular Recipes <span>&#8594;</span>
              </Link>

              <PopularRecipe />
            </div>

            <div className={recipe.categories} style={{ marginTop: "2rem" }}>
              <p className={yum.group}>
                Yummy Recipes <span>&#8594;</span>
              </p>
            </div>
            <div className={yum.yum_recipe_container}>
              <div>
                <ChickenInfusion />
              </div>
              <div>
                <Under45Min />
              </div>
              <div>
                <BudgetFriendly />
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Home;
