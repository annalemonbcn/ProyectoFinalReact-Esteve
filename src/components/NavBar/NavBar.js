import { useState } from "react";

// Style
import "./NavBar_style.css";

// Components
import CartWidget from "./CartWidget/CartWidget";
import MenuItem from "./Menu_item";

// Models
import { MenuList } from "../../models/Menu_list";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  /**
   * toggleMenu --> open or close a menu via component state
   */
  function toggleMenu() {
    setNavbarOpen(!navbarOpen);
  }

  /**
   * getCurrentPage --> use window.location to return the actual path
   * @returns actual path from url
   */
  function getCurrentPage() {
    return window.location.pathname;
  }

  return (
    <nav className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo  */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" className="h-8 mr-3" alt="lemoninfilm Logo" />
          <span
            className="self-center text-2xl font-semibold whitespace-nowrap text-slate-900"
            id="logo-text"
          >
            lemoninfilm
          </span>
        </a>

        <div className="flex md:order-2 items-center">
          {/* Cart widget */}
          <CartWidget />

          {/* Hamburger menu */}
          <HamburgerMenu openMenu={toggleMenu} />
        </div>

        <div
          className={
            (navbarOpen ? " flex" : " hidden") +
            " lg:items-center justify-between w-full md:flex md:w-auto md:order-1 h-screen md:h-auto"
          }
          id="menu-list"
        >
          {/* Links list */}
          <ul className="md:flex flex-col lg:gap-x-8 p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {MenuList.map((item, index) => (
              <MenuItem
                key={index}
                href={item.path}
                text={item.title}
                isActive={getCurrentPage() === item.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
