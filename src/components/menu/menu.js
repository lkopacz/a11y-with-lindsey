import React from 'react'
import { Link } from 'gatsby'
import './menu.css'

const Menu = props => {
  return (
    <nav className={props.class} style={{ alignSelf: props.position }}>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="https://egghead.io/instructors/lindsey-kopacz">Egghead</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
