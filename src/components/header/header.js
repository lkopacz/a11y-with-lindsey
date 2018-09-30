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
      header = <h1 className="logo">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            borderBottom: 'none'
          }}
        >
          <span className="visually-hidden"> {this.props.siteTitle} </span>
          <img src={Logo} alt="" />
        </Link>
      </h1>
    } else {
      header = <div className="logo">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            borderBottom: 'none'
          }}
        >
          <span className="visually-hidden"> {this.props.siteTitle} </span>
          <img src={Logo} alt="" />
        </Link>
      </div>
    }
    
    return (
      <header>
        <div className="header-wrapper">
          {header}
          <Menu class="menu-main" position="flex-end" hasPrivacyPolicy={false}/>
        </div>
      </header>
    )
  }
} 

export default Header
