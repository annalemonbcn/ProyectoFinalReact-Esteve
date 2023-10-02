// Hooks
import { useState } from "react";

// Components
import MenuItem from "./MenuItem";

// Models
import { MenuList } from "../../models/Menu_list";

const NavBar = () => {
  const [navVisible, setNavVisible] = useState(false);

  /**
   * Open or close the nav via component state
   */
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <nav className="w-full px-5">
      <p className="text-center text-md md:hidden mb-4" onClick={toggleNav}>
        MENU
      </p>
      <ul
        className={`flex items-center justify-center gap-8 mb-12 md:mb-8 bg-soft-grey md:bg-transparent relative transition-all ease-in-out duration-700 
        ${
          navVisible
            ? "h-auto top-0 flex-col gap-1 opacity-100"
            : "opacity-0 md:opacity-100 h-0 md:h-auto top-[-100vh] md:top-0"
        }`}
      >
        {MenuList.map((item, index) => (
          <li>
            <MenuItem key={index} href={item.path} title={item.title} setNavVisible={setNavVisible} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
