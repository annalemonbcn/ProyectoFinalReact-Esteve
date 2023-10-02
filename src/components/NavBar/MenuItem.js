// Routing
import { NavLink } from "react-router-dom";

// const MenuItem = ({ href, title, closeMenu }) => {
const MenuItem = ({ href, title, setNavVisible }) => {
  const handleClick = () => {
    setNavVisible(false);
  };

  return (
    <NavLink
      to={href}
      onClick={handleClick}
      className="uppercase block py-2 pl-3 pr-4 text-md md:text-sm lg:text-base text-gray-900 md:hover:text-blue-700 md:p-0 relative menu-link"
    >
      {title}
    </NavLink>
  );
};

export default MenuItem;
