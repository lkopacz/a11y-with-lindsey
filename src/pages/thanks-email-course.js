import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const ThankYouEmailCourse = ({ data }) => (
  <div>
    <Helmet
      title="Thank you | a11y with Lindsey"
      meta={[
        {
          name: 'description',
          content:
            "In 2017, I broke my right middle finger. It wasn't until then I realized how much we take our ability for granted. At any given time, we can become temporarily or permanently disabled.",
        },
        {
          name: 'keywords',
          content: 'accessibility, DC, inclusion, empathy',
        },
      ]}
    />
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
            Thanks for letting me know you want to subscribe to my free
            accessibility email course! You have been subscribed to that list!
          </p>
        </main>
      </div>
    </div>
  </div>
)

export default ThankYouEmailCourse
