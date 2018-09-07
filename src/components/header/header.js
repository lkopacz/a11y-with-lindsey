import React from 'react'
import Link from 'gatsby-link'
import Menu from '../menu/menu'
import Logo from '../../images/logo.svg'
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-wrapper">
      <h1 style={{ margin: 0, padding: "2rem 0 1rem" }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <span className="visually-hidden"> {siteTitle} </span>
          <img src={Logo} alt="" style={{width: 200}} />
        </Link>
      </h1>
      <Menu />
    </div>
  </header>
)

export default Header
