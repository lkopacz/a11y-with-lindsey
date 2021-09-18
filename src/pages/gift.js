import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import StripePreorder from '../components/stripe-preorder/StripePreorder'
import Cover from '../images/cover.png'

const Gift = () => {
  return (
    <div>
      <Helmet title="The Bootcamper's Guide to Web Accessibility | a11y with Lindsey" />
      <div className="content">
        <main id="main-content">
          <div className="content__heading">
            <div className="wrapper">
              <nav className="breadcrumb">
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>The Bootcampers Guide to Web Accessibility</li>
                </ol>
              </nav>
              <h1>The Bootcampers Guide to Web Accessibility</h1>
            </div>
          </div>
          <div className="content__body">
            <div className="wrapper">
              Unfortunately, I don't have the capacity to manage gifting right
              now, since it is all manual. If you are interested in buying a
              copy of my book, you can go to{' '}
              <a href="https://a11y-with-lindsey.ck.page/products/pre-order-the-bootcampers-guide-to-web">
                my product page
              </a>{' '}
              on ConvertKit.
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Gift
