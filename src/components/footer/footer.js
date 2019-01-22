import React from 'react'
import Menu from '../menu/menu'
import Subscribe from '../subscribe/subscribe'
import './footer.css'

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <Menu class="footer-menu" position="flex-start" hasPrivacyPolicy={true} />
      <div className="footer-details">
        <ul className="social">
          <li>
            <a
              href="https://www.linkedin.com/in/lindsey-kopacz-70a09033"
              aria-label="Lindsey's LinkedIn"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/littlekope0903"
              aria-label="Lindsey's Twitter"
            >
              <i className="fab fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://github.com/lkopacz" aria-label="Lindsey's Github">
              <i className="fab fa-github" aria-hidden="true" />
            </a>
          </li>
        </ul>
        <Subscribe color="#F3E9EA" title="Get Updates" id="footer" />
      </div>
    </div>
    <div className="credit">
      Logo and Color Scheme design by{' '}
      <a href="https://www.linkedin.com/in/raquel-breternitz/">
        Raquel Breternitz
      </a>
    </div>
  </footer>
)

export default Footer
