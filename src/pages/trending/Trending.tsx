import  { useEffect, useState } from "react";
import { AppDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { getTrendingRecipes } from "../../features/fetchRecipes/recipeSlice";
import trending from "../../components/trending/trending.module.css";
import { FiCommand } from "react-icons/fi";
import { FaArrowDownLong } from "react-icons/fa6";
import globalStyles from "../../globalcss/globalStyles.module.css"
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const Trending = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { trendingRecipes, loading } = useAppSelector((state) => state.recipe);
  const [displayCount, setDisplayCount] = useState<number>(8);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  useEffect(() => {
    dispatch(
      getTrendingRecipes({
        number: 50,
        includeNutrition: true,
        includeTags: "vegetarian,dessert",
      })
    );
  }, [dispatch]);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setDisplayCount((prevCount) => prevCount + 4);
      setLoadingMore(false);
    }, 1000);
  };
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
            {trendingRecipes?.slice(0, displayCount)?.map((image, index) => (
              <div key={image.id}>
                <Fade
                  triggerOnce={true}
                  cascade={false}
                  direction="up"
                  delay={index * 100}
                >
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
        <div className={trending.load_more}>
          {displayCount < trendingRecipes.length && (
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
};

export default Trending;
