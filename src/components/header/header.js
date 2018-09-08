import React from 'react'
import Link from 'gatsby-link'
import Menu from '../menu/menu'
import Logo from '../../images/logo.svg'
import './header.css'

class Header extends React.Component {
  render () {
    let isFront = false;
    if (this.props.location.pathname === "/") {
      isFront = true;
    }
    let header;

    if (isFront) {
      header = <h1 style={{ margin: 0, padding: "2rem 0 1rem" }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <span className="visually-hidden"> {this.props.siteTitle} </span>
          <img src={Logo} alt="" style={{width: 200}} />
        </Link>
      </h1>
    } else {
      header = <div style={{ margin: 0, padding: "2rem 0 1rem" }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <span className="visually-hidden"> {this.props.siteTitle} </span>
          <img src={Logo} alt="" style={{width: 200}} />
        </Link>
      </div>
    }
    
    return (
      <header>
        <div className="header-wrapper">
          {header}
          <Menu />
        </div>
      </header>
    )
  }
} 

export default Header
