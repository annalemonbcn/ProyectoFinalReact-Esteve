import { useState } from "react";

// Style
import "./NavBar_style.css";

// Components
import CartWidget from "../CartWidget";

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
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
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
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0 relative"
                aria-current={getCurrentPage() === "/" ? "page" : undefined}
              >
                {getCurrentPage() === "/" && (
                  <span className="gt">&gt; </span>
                )}
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0 relative"
                aria-current={getCurrentPage() === "/about" ? "page" : undefined}
              >
                {getCurrentPage() === "/about" && (
                  <span className="gt">&gt; </span>
                )}
                About
              </a>
            </li>
            <li>
              <a
                href="/market"
                className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0 relative"
                aria-current={getCurrentPage() === "/market" ? "page" : undefined}
              >
                {getCurrentPage() === "/market" && (
                  <span className="gt">&gt; </span>
                )}
                 Market
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
