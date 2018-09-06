import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../images/logo.svg'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#1E3650',
      borderTop: '15px solid #25768F',
      padding: '2rem 0 1rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <span className="visually-hidden"> {siteTitle} </span>
          <img src={Logo} alt=""/>
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
