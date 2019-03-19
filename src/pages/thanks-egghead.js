import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const ThankYouEgghead = ({ data }) => (
  <div>
    <Helmet title="Thank you | a11y with Lindsey" />
    <div className="wrapper">
      <nav className="breadcrumb">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
        </ol>
      </nav>
      <div className="content">
        <main id="main-content">
          <h1>Thank you!</h1>
          <p>
            Thanks for letting me know you want to see my egghead videos when
            they come out! You have been subscribed to that list!
          </p>
        </main>
      </div>
    </div>
  </div>
)

export default ThankYouEgghead
