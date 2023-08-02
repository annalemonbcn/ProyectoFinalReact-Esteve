import React from 'react'

const MenuItem = ({ href, text, isActive }) => {
  return (
    <li>
      <a
        href={href}
        className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0 relative"
        aria-current={isActive ? "page" : undefined}
      >
        {isActive && <span className="gt">&gt; </span>}
        {text}
      </a>
    </li>
  )
}

export default MenuItem
