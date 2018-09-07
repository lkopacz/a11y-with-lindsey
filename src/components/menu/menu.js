import React from 'react'
import Link from 'gatsby-link'
import './menu.css'

const Menu = () => (
  <nav style={{alignSelf: "flex-end"}}>
    <ul className="menu">
      <li className="menu-item">
        <Link to="/about">
          About
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/">
          Blog
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Menu
