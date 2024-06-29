import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { getSingleRecipe } from '../../features/fetchRecipes/recipeSlice';
import singularRecipe from './singularRecipe.module.css'
import { FaHeart, FaStopwatch } from 'react-icons/fa';
import { BiSolidDollarCircle } from 'react-icons/bi';
import trending from '../../components/trending/trending.module.css'
import { FiCommand } from 'react-icons/fi';
import GetSimilarRecipes from './GetSimilarRecipes';
import { Fade } from 'react-awesome-reveal';


const GetSingleRecipe = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { singleRecipe, loading } = useAppSelector(
      (state) => state.recipe
    );
  const { id = "0" } = useParams<{ id: string }>();
  const newId = parseInt(id, 10);
  useEffect(() => {
    dispatch(getSingleRecipe({includeNutrition: true, id: newId,addTasteData:true, addWinePairing:true}));
  }, [dispatch, newId]);


  return (
    <>
      <div className={singularRecipe.single_recipe_wrapper}>
        {loading ? (
          <div className={trending.icon}>
            <FiCommand className={trending.loading_icon} />
          </div>
        ) : (
          <div>
            <Fade>
              <div className={singularRecipe.single_recipe_container}>
                <div className={singularRecipe.single_recipe_image}>
                  <img src={singleRecipe?.image} alt={singleRecipe?.title} />
                </div>
                <div className={singularRecipe.single_recipe_rating}>
                  <Fade direction='left' triggerOnce={true}>
                    <div>
                      <BiSolidDollarCircle
                        className={singularRecipe.single_recipe_icon}
                        style={{ color: "green" }}
                      />
                      <p>${singleRecipe?.pricePerServing}</p>
                    </div>
                    <div>
                      <FaHeart className={singularRecipe.single_recipe_icon} />
                      <p>{singleRecipe?.aggregateLikes} likes</p>
                    </div>
                    <div>
                      <FaStopwatch
                        className={singularRecipe.single_recipe_icon}
                        style={{ color: "grey" }}
                      />
                      <p>{singleRecipe?.readyInMinutes} minutes</p>
                    </div>
                  </Fade>
                </div>
                <div className={singularRecipe.single_recipe_info}>
                  <h1>{singleRecipe?.title}</h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: singleRecipe?.summary || "",
                    }}
                  />
                </div>
              </div>
            </Fade>

            <div className={singularRecipe.single_recipe_ingredients}>
              <Fade direction="left" triggerOnce={true}>
                <h2>Ingredients</h2>
              </Fade>

              <ul>
                {singleRecipe?.extendedIngredients?.map((ingredient, index) => (
                  <>
                    <div key={ingredient.id}>
                          <Fade triggerOnce={true} cascade={false} direction="up" delay={index*100}>x
                      <p>{ingredient?.original}</p></Fade>
                    </div>
                  </>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        <Fade>
        <GetSimilarRecipes />
        </Fade>
        
      </div>
    </>
  );
        }




export default GetSingleRecipe