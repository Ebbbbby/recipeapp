import { useState } from "react";
import { useAppSelector } from "../../store";

import { FiCommand } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import trending from "../../components/trending/trending.module.css";
import { FaArrowDownLong } from "react-icons/fa6";
import globalStyles from "../../globalcss/globalStyles.module.css";

const ChickenInfusionRecipes = () => {
  const [displayCount, setDisplayCount] = useState<number>(8);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const { chickenInfusion, loading } = useAppSelector((state) => state.recipe);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setDisplayCount((prevCount) => prevCount + 4);
      setLoadingMore(false);
    }, 1000);
  };
  const filterChickenRecipes = chickenInfusion?.filter((recipe) =>
    recipe.title.includes("Chicken")
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
            {filterChickenRecipes
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
                      to={`/chicken/${image?.id}`}
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
          {displayCount < filterChickenRecipes?.length && (
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

export default ChickenInfusionRecipes;
