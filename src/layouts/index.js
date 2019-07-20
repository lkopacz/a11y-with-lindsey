import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import './index.css'
import './fonts.css'

const Layout = ({ children, data, location }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        htmlAttributes={{ lang: 'en' }}
        meta={[
          {
            name: 'description',
            content:
              "a11y with Lindsey, where we want to make our internet, Everyone's internet!",
          },
          {
            name: 'keywords',
            content: 'accessibility, DC, inclusion, empathy',
          },
          {
            name: 'viewport',
            content: 'width=device-width',
          },
        ]}
      />
      <a className="focusable visually-hidden" href="#main-content">
        Skip to main content
      </a>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      {children()}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
