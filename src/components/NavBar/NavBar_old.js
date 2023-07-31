import { useState } from "react";

// Style
import "./NavBar_style.css";

// Components
import CartWidget from "../CartWidget";

const NavBarOld = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  function toggleMenu() {
    setNavbarOpen(!isNavbarOpen);
    console.log(isNavbarOpen);
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

        {/* <div className="items-center justify-between w-full md:flex md:w-auto order-1 "> */}
        {/* <div className="items-center justify-between w-full md:flex md:w-auto md:order-1"> */}
        {/* Links list */}
        <ul
          className={
            (isNavbarOpen ? "flex" : "hidden") +
            " w-full md:flex flex-col lg:gap-x-8 p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 absolute top-16 bg-white h-screen"
          }
        >
          <li>
            <a
              href="/"
              className="underline lg:no-underline underline-offset-4 block py-2 pl-3 pr-4 text-blue-700 md:hover:text-blue-700 md:p-0"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0"
            >
              Equipment
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0"
            >
              Shop
            </a>
          </li>
        </ul>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default NavBarOld;
