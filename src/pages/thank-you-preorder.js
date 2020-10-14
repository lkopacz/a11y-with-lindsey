import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const ThankYouPreorder = () => (
  <div>
    <Helmet title="Thank you | a11y with Lindsey" />
    <div className="content">
      <main id="main-content">
        <div className="content__heading">
          <div className="wrapper">
            <nav className="breadcrumb">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Thank You</li>
              </ol>
            </nav>
            <h1>Thank You</h1>
          </div>
        </div>
        <div className="content__body">
          <div className="wrapper">
            <p>
              Thank you for preordering my book! You'll have it delivered to
              your inbox on November 2nd!
            </p>
            <Link to="/">Go Back Home</Link>
          </div>
        </div>
      </main>
    </div>
  </div>
)

export default ThankYouPreorder
