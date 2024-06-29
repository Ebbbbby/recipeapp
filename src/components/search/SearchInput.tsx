import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import searchInput from "../search/searchInput.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchComplexRecipes } from "../../features/search/searchRecipeSlice";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
    const [query, setQuery] = useState<string>("");
  const navigate = useNavigate()
    const handleSearch = () => {
      if (query.trim() === '' ) return;
      const searchUrl = `/search?q=${encodeURIComponent(
            query
          )}`;

      dispatch(fetchComplexRecipes({ query,number:100 }));
      setQuery("");
      navigate(searchUrl);
    };


  const handleFocus = () => {
    ref?.current?.focus();
  };
  console.log(query)
  // const { searchRecipes } = useAppSelector((state) => state.searchRecipes);
  // console.log(searchRecipes);
  return (
    <div className={searchInput.search_container} onClick={handleFocus}>
      <div className={searchInput.search_input_container}>
        <FiSearch className={searchInput.search_icon} onClick={handleSearch} />
        <input
          name="query"
          className={searchInput.search_input}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
