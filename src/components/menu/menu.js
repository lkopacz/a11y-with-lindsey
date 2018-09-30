import React from 'react'
import Link from 'gatsby-link'
import './menu.css'

const Menu = (props) => {
  let privacyPolicy;
  if (props.hasPrivacyPolicy) {
    privacyPolicy = <li className="menu-item privacy-policy"><Link to="/privacy-policy">Privacy Policy</Link></li>
  }
  return (
    <nav className={props.class} style={{alignSelf: props.position }}>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/blog">
            Blog
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">
            Contact
          </Link>
        </li>
        {privacyPolicy}
      </ul>
    </nav>
  )
}

export default Menu
