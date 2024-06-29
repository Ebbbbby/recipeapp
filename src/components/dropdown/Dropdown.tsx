
import dropdown from "./dropdown.module.css";

import { FiCommand } from "react-icons/fi";

interface dropDownProps {
    recipes:[]
    title: string;
  // images: string[];
}

const Dropdown = ({ title }: dropDownProps) => {
  return(
    <>
      <div className={dropdown.dropdown_container}>

          <div className={dropdown.icon}>
            <FiCommand className={dropdown.loading_icon} />
          </div>

          <div>
            <h3>{title}</h3>
            <div className={dropdown.dropdown_images_container}>
            <h3>Dropdown</h3>
            </div>
          </div>

      </div>
    </>
  );
};

export default Dropdown;
