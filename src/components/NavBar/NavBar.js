// Hooks
import { useState } from "react";

// Components
import CartWidget from "./CartWidget";
import MenuItem from "./MenuItem";

// Models
import { MenuList } from "../../models/Menu_list";
import HamburgerMenu from "./HamburgerMenu";


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
  // function getCurrentPage() {
  //   return window.location.pathname;
  // }

  return (
    <nav className="bg-slate-100 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-6 lg:px-4 py-3">
        {/* Logo  */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" className="h-8 mr-3" alt="lemoninfilm Logo" />
          <span
            className="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap text-slate-900"
            id="logo-text"
          >
            <h1>lemoninfilm</h1>
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
                title={item.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
