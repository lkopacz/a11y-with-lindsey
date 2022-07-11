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
  const [position, setPosition] = useState(0)

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
    if (position > 50) {
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
      {/* <div className="promo">
        Want to level up in accessibility?{' '}
        <a
          onFocus={onFocusFunc}
          onBlur={onBlurFunc}
          href="https://a11y-with-lindsey.ck.page/b4e437f629"
        >
          Get my 10 day guide
        </a>
      </div> */}
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
