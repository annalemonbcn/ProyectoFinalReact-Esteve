// Hooks
import { useState } from "react";

// Routing
import { NavLink } from "react-router-dom";

// Components
import CartWidget from "../widgets/CartWidget";
import MenuItem from "./MenuItem";
import ArrowUpLineIcon from "@rsuite/icons/ArrowUpLine";

// Models
import { MenuList } from "../../models/Menu_list";
import HamburgerMenuSvg from "../svg/HamburgerMenu";

const ArrowUpLineSvg = ({ size }) => (
  <ArrowUpLineIcon style={{ fontSize: size, color: "white" }} />
);

const NavBar = () => {
  const [handleHover, setHandleHover] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  /**
   * Open or close a menu via component state
   */
  function toggleMenu() {
    setNavbarOpen(!navbarOpen);
  }

  function toggleHover() {
    setHandleHover(!handleHover);
  }

  function handleOnMouseEnter() {

  }

  function handleOnMouseLeave() {

  }


  return (
    <>
      <div className="nav-container z-[1000]">
      <nav
          className={`w-full z-50 max-h-[72px] bg-slate-100 transition-all duration-100 
         ${handleHover ? "translate-y-0" : "translate-y-[-100%]"}
          `}
          id="navbar"
          onMouseEnter={() => setHandleHover(true)}
          onMouseLeave={() => setHandleHover(false)}
        >
          <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-6 lg:px-4 py-4">
            {/* Logo  */}
            <NavLink to="/" className="flex items-center">
              <img
                src="/logo.png"
                className="h-8 mr-3"
                alt="lemoninfilm Logo"
              />
              <span
                className="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap text-slate-900"
                id="logo-text"
              >
                <h1>lemoninfilm</h1>
              </span>
            </NavLink>

            <div className="flex md:order-2 items-center">
              {/* Cart widget */}
              <CartWidget />

              {/* Hamburger menu */}
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <HamburgerMenuSvg />
              </button>
            </div>

            <div
              className={`${
                navbarOpen
                  ? "opacity-100 h-screen md:h-auto bg-slate-100 absolute left-0 top-[72px] md:relative md:left-auto md:top-auto"
                  : "opacity-0"
              } transition-all md:transition-none md:opacity-100 ease-in duration-100 md:items-center justify-between w-full md:flex md:w-auto md:order-1 md:border-0 bg-slate-100`}
              id="menu-list"
            >
              {/* Links list */}
              <ul
                className={`md:flex flex-col lg:gap-x-8 p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
                  navbarOpen ? "block" : "hidden"
                }`}
                id="menu-items"
              >
                {MenuList.map((item, index) => (
                  <MenuItem
                    key={index}
                    href={item.path}
                    title={item.title}
                    closeMenu={toggleMenu}
                  />
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`absolute top-[20px] flex justify-center w-full arrow-icon ${
          handleHover ? "z-0" : "z-[1000]"
        }`}
        onClick={toggleHover}
      >
        <ArrowUpLineSvg size="1.5em" />
      </div>
    </>
  );
};

export default NavBar;
