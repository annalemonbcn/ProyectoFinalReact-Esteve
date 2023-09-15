// Routing
import { NavLink } from 'react-router-dom'

const MenuItem = ({ href, title, closeMenu }) => {

  const handleClick = () => {
    closeMenu();
  };

  return (
    <li>
      <NavLink
        to={href}
        onClick={handleClick}
        className="block py-2 pl-3 pr-4 text-lg md:text-sm lg:text-base text-gray-900 md:hover:text-blue-700 md:p-0 relative menu-link"
      >
        {title}
      </NavLink>
    </li>
  )
}

export default MenuItem
