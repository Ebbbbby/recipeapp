import React, { useEffect, useState } from "react";
import { AppDispatch, useAppSelector } from "../../store";
import trending from "../../components/trending/trending.module.css";
import { Fade } from "react-awesome-reveal";
import { FiCommand } from "react-icons/fi";
import globalStyles from "../../globalcss/globalStyles.module.css";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { fetchComplexRecipes } from "../../features/search/searchRecipeSlice";

const SearchRecipeDisplay = () => {
  const { loading, searchRecipes } = useAppSelector(
    (state) => state.searchRecipes
  );
  console.log(searchRecipes);
  const [displayCount, setDisplayCount] = useState<number>(12);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setDisplayCount((prevCount) => prevCount + 4);
      setLoadingMore(false);
    }, 1000);
  };
  const dispatch = useDispatch<AppDispatch>();

  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (query) {
      dispatch(fetchComplexRecipes({ query, number: 100 }));
    }
  }, [dispatch, query]);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (searchRecipes?.length === 0) {
    return <Navigate to="/not-found" replace />;
  }



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
            {searchRecipes?.slice(0, displayCount)?.map((image, index) => (
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
          {displayCount < searchRecipes?.length && (
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

export default SearchRecipeDisplay;
