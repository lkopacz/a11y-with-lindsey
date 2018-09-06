import React from 'react'
import './footer.css'

const Footer = (props) => (
  <footer>
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
  </footer>
);

export default Footer;