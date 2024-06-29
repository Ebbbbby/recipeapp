import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { AppDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { getSimilarRecipes } from "../../features/fetchRecipes/recipeSlice";
import similar from "./similarRecipes.module.css";
import { Fade } from "react-awesome-reveal";
import trending from "../../components/trending/trending.module.css";
import { FiCommand } from "react-icons/fi";
const GetSimilarRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { SimilarRecipe, loading } = useAppSelector((state) => state.recipe);
  const { id = "0" } = useParams<{ id: string }>();
  const newId = parseInt(id, 10);

  useEffect(() => {
    dispatch(
      getSimilarRecipes({
        id: newId,
        number: 2,
        limitLicense: true,
      })
    );
  }, []);

  return (
    <>
      <Fade>
        <div className={similar.similar_wrapper}>
          {loading? (
          <div className={trending.icon}>
            <FiCommand className={trending.loading_icon} />
          </div>
          ) : (<>
            <h2>Similar Recipes</h2>
          <div className={similar.similar_container}>
            {SimilarRecipe?.map((SimilarRecipe, index) => (
              <div key={SimilarRecipe.id}>
                <Fade
                  triggerOnce={true}
                  cascade={false}
                  direction="up"
                  delay={index * 100}
                >
                  {" "}
                  <Link
                    to={`/trending/${SimilarRecipe?.id}`}
                    className={similar.similar_images_link}
                  >
                    <div className={similar.similar_images}>
                      <img
                        src={`https://spoonacular.com/recipeImages/${SimilarRecipe.id}-312x231.jpg`}
                        alt={SimilarRecipe.title}
                        className={similar.similar_image}
                      />
                      <h3>{SimilarRecipe.title}</h3>
                    </div>
                  </Link>
                </Fade>
              </div>
            ))}
          </div>
            </>)}

        </div>
      </Fade>
    </>
  );
};

export default GetSimilarRecipes;
