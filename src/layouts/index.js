import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useDebouncedCallback } from 'use-debounce'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import './index.css'
import './fonts.css'

const Layout = ({ children, location }) => {
  const [position, setPosition] = useState(window.pageYOffset)

  const [scrollHandler] = useDebouncedCallback(() => {
    setPosition(window.pageYOffset)
  }, 300)

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      window.addEventListener('scroll', scrollHandler)
    }

    return () => {
      isMounted = false
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  useEffect(() => {
    if (position > 90) {
      document.body.classList.add('promo-showing')
    } else {
      document.body.classList.remove('promo-showing')
    }
  }, [position])

  const onFocusFunc = () => {
    document.body.classList.add('promo-showing')
  }

  const onBlurFunc = () => {
    document.body.classList.remove('promo-showing')
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
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
      <div className="promo">
        <div>
          Things about my promo{' '}
          <a onFocus={onFocusFunc} onBlur={onBlurFunc} href="">
            Click here
          </a>
        </div>
      </div>
      <div className="content">
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        {children}
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
