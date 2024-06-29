import Dropdown from "../components/dropdown/Dropdown";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import navbar from "../layout/style/navbar.module.css";
import globalStyles from "../globalcss/globalStyles.module.css";
import { useState } from "react";
import SearchInput from "../components/search/SearchInput";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Footer from "../components/footer/Footer";
interface dropDownProps {
    recipes:[]
    title: string;
  // images: string[];
}

const Navlayout = ({ recipes, title} : dropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  //   const dropdownRef = useRef<HTMLDivElement>(null);
  //   useEffect(() => {
  //     const handleClickOutside = (event: any) => {
  //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //         setIsOpen(false);
  //       }
  //     };
  // document.addEventListener("click", handleClickOutside);

  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, []);
  return (
    <>
      <div className={navbar.nav_wrapper}>
        <div className={`${navbar.nav_container} ${globalStyles.container_lg}`}>
          <div className={navbar.nav_logo}>
            <p>Edibles</p>
          </div>
          <div className={navbar.nav_items}>
            <ul className={navbar.nav_item}>
              <li className={navbar.item} onClick={handleToggle}>
                <NavLink className={navbar.nav_link} to="/">
                  Recipies
                  {isOpen ? (
                    <span>
                      <FaChevronDown />{" "}
                    </span>
                  ) : (
                    <span>
                      <FaChevronUp />
                    </span>
                  )}
                </NavLink>
                {isOpen && (
                  <div className={navbar.nav_dropdown}>
                    <Dropdown recipes={recipes} title={"Trending Recipe"} />
                  </div>
                )}
              </li>
              <li className="nav__item">
                <NavLink className={navbar.nav_link} to="/trending">
                  Trending

                </NavLink>
              </li>
            </ul>
          </div>
          <div className={navbar.search}>
            <SearchInput />
          </div>
          <div className={navbar.hamburger}>
            <HiOutlineMenuAlt1
              className={navbar.hamburger}
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
            />
            {hamburgerOpen && (
              <div className={navbar.mobile_nav_container}>
                <ul>
                  <li className={navbar.mobile_item} onClick={handleToggle}>
                    <NavLink className={navbar.mobile_nav_link} to="/">
                      Recipies
                      {isOpen ? (
                        <span>
                          <FaChevronDown />
                        </span>
                      ) : (
                        <span>
                          <FaChevronUp />
                        </span>
                      )}
                    </NavLink>
                    {isOpen && (
                      <div className={navbar.nav_dropdown}>
                        <Dropdown recipes={recipes} title={title} />
                      </div>
                    )}
                  </li>
                  <li className={navbar.mobile_item}>
                    <NavLink className={navbar.mobile_nav_link} to="/trending">
                      Trending
                    </NavLink>
                  </li>
                </ul>
                <div className={navbar.mobile_search}>
                  <SearchInput />
                </div>
              </div>
              // <div className={navbar.mobile_container}>
              //   <div className={navbar.mobile_nav_items}>

              //   </div>
              // </div>
            )}
            {hamburgerOpen && (
              <div className={navbar.mobile_nav_container}>
                <ul>
                  <li className={navbar.mobile_item} onClick={handleToggle}>
                    <NavLink className={navbar.mobile_nav_link} to="/">
                      Recipies
                      {isOpen ? (
                        <span>
                          <FaChevronDown />
                        </span>
                      ) : (
                        <span>
                          <FaChevronUp />
                        </span>
                      )}
                    </NavLink>
                    {isOpen && (
                      <div className={navbar.dropdown_container}>
                        <div className={navbar.nav_dropdown}>
                          <Dropdown recipes={recipes} title={"Trending Recipe"} />
                        </div>
                      </div>
                    )}
                  </li>
                  <li className={navbar.mobile_item}>
                    <NavLink className={navbar.mobile_nav_link} to="/trending">
                      Trending <FaChevronUp />
                    </NavLink>
                  </li>
                </ul>
                <div className={navbar.mobile_search}>
                  <SearchInput />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <main>
        <Outlet />
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Navlayout;
