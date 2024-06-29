import { useState } from 'react'
import { getBudgetFriendlyRecipes } from '../../features/fetchRecipes/recipeSlice';
import { useEffect } from "react";
import { AppDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { FiCommand } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import trending from "../../components/trending/trending.module.css";
import { FaArrowDownLong } from 'react-icons/fa6';
import globalStyles from "../../globalcss/globalStyles.module.css";





const BudgetFriendly = () => {
  const [displayCount, setDisplayCount] = useState<number>(8);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const { budgetFriendlyRecipes, loading } = useAppSelector(
      (state) => state.recipe
    );

    useEffect(() => {
      dispatch(
        getBudgetFriendlyRecipes({
          number: 20,
          includeNutrition: true,
        })
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const loadMore = () => {
      setLoadingMore(true);
      setTimeout(() => {
        setDisplayCount((prevCount) => prevCount + 4);
        setLoadingMore(false);
      }, 1000);
    };
    const filterBudgetFriendlyRecipes = budgetFriendlyRecipes?.filter(
      (recipe) => {
        return (recipe?.pricePerServing ?? 0) <= 100;
      }
    );
  return (
    <>
      <div
        className={`${trending.trending_container} ${globalStyles.container_lg}`}
      >
        {loading ? (
          <div className={trending.icon}>
            <FiCommand className={trending.loading_icon} />
          </div>
        ) : (
          <div className={trending.trending_images_container}>
            {filterBudgetFriendlyRecipes
              ?.slice(0, displayCount)
              ?.map((image, index) => (
                <div key={image.id}>
                  <Fade
                    triggerOnce={true}
                    cascade={false}
                    direction="up"
                    delay={index * 100}
                  >
                    <Link
                      to={`/budget/${image?.id}`}
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
        <div className={trending.load_more}>
          {displayCount < filterBudgetFriendlyRecipes?.length && (
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className={trending.loadmore_arrow}
            >
              {loadingMore ? (
                <FaArrowDownLong className={trending.arrow_icon} />
              ) : (
                <FaArrowDownLong className={trending.arrow_icon} />
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default BudgetFriendly