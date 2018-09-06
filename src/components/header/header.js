import React from 'react'
import Link from 'gatsby-link'

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
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
