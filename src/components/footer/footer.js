import React from 'react'
import Menu from '../menu/menu'
import './footer.css'

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <Menu class="footer-menu" />
      <div className="footer-details">
        <ul className="social">
          <li>
            <a href="https://www.linkedin.com/in/lindsey-kopacz-70a09033?trk=hp-identity-photo" aria-label="Lindsey's LinkedIn">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/" aria-label="Lindsey's Twitter">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/lkopacz" aria-label="Lindsey's Github">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <span className="credit">Logo and Color Scheme design by <a href="https://www.linkedin.com/in/raquel-breternitz/">Raquel Breternitz</a></span>
      </div>
    </div>
  </footer>
);

export default Footer;