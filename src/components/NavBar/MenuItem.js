// const MenuItem = ({ href, title, isActive }) => {
//   return (
//     <li>
//       <a
//         href={href}
//         className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0 relative menu-link"
//         aria-current={isActive ? "page" : undefined}
//       >
//         {isActive && <span className="gt">&gt; </span>}
//         {title}
//       </a>
//     </li>
//   )
// }

// export default MenuItem

// Routing
import { NavLink } from 'react-router-dom'

const MenuItem = ({ href, title }) => {
  return (
    <li>
      <NavLink
        to={href}
        className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0 relative menu-link"
      >
        {title}
      </NavLink>
    </li>
  )
}

export default MenuItem
